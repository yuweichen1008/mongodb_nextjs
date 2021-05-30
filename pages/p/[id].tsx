import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import Layout from '../../components/Layout'
import { PostProps } from '../../components/Post'
import prisma from '../../lib/prisma'
import { useRouter } from 'next/router'

async function publishPost({id: number, router: NextRouter}): Promise<void> {
  let url = `http://localhost:3000/api/publish/${id}`;
  await fetch(url, {
      method: 'PUT'}
  )
  await router.push('/')
  // TODO reroute
}

const Post: React.FC<PostProps> = (props) => {
    const router             = useRouter()
    const [session, loading] = useSession()
    const postBelongsToUser = session?.user?.email === props.author?.email
    const userHasValidSession = Boolean(session)
    var title: string = props.title
    var postID: number = props.id
    if (!props.published) {
      title = `${title} (Draft)`
    }
  
    return (
      <Layout>
        <div>
          <h2>{title}</h2>
          <p>By {props?.author?.name || "Unknown author"}</p>
          <div>
              {props.content}
          </div>
          {!props.published && userHasValidSession && postBelongsToUser && (
            <button onClick={() => publishPost({postID: number, router: NextRouter})}>Publish</button>
          )}
        </div>
      </Layout>
    )
}
  
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // const prisma = new PrismaClient()
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params?.id) || -1,
        },
        include: {
            author: {
                select: { name: true, email: true, image: true},
            },
        },
    })
    return {
        props: post,
    }
}

export default Post