import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import { PostProps } from '../../components/Post'
// import prisma from '../../lib/prisma'
import { PrismaClient } from '@prisma/client'

const Post: React.FC<PostProps> = (props) => {
    let title = props.title
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
        </div>
      </Layout>
    )
}
  
const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const prisma = new PrismaClient()
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params?.id) || -1,
        },
        include: {
            author: {
                select: { name: true },
            },
        },
    })
    return {
        props: post,
    }
}
export default Post