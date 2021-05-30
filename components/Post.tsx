import React from "react";
import Link from "next/link";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
    image: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const authorPic  = post.author ? post.author.image : "https://source.unsplash.com/user/erondu";
  return (
      <> 
        { console.log(post.author.image)}
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link> 
        <small>By {authorName}</small>
          <img  className="inline object-cover w-16 h-16 mr-2 rounded-full" src={authorPic} alt="Author image"/>
        <div>
            {post.content}
        </div>
    </>
  );
};

export default Post;