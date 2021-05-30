import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Post from '../components/Post'
import prisma from '../lib/prisma'

export default function Home(props) {
  
  const router = useRouter()
  const [session, loading] = useSession()
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname

  let posts = (
    <div>
    </div>
  )
  if (session) {
    posts = (
      <div className="">
        <Link href="/drafts">
          <a data-active={isActive('/drafts')}>My drafts</a>
        </Link>
      </div>
      )
  }
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      {session && <>
        <div>You are logged in</div>
        <Link href="/create_post">
          <button>
            <a>New post</a>
          </button>
        </Link>
        {posts}
      </>}
      {!session && <>
        <div>Login to Post</div>
      </>}
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          image: true
        },
      },
    },
  })
  // const feed = [
  //   {
  //     id: 1,
  //     title: "Prisma is the perfect ORM for Next.js",
  //     content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
  //     published: false,
  //     author: {
  //       name: "Nikolas Burk",
  //       email: "burk@prisma.io",
  //     },
  //   },
  // ]
  return { props: { feed } }
}
