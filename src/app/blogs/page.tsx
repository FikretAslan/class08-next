import Link from "next/link";
import {getPosts} from "."

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> This is a cool blog page!</h1>
    <p>My Blog Posts</p>
    <ul>
      {posts.map(post => {
        return (
          <li key={post.slug}></li>
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        )
})}
    </ul>
    </main>
    
    
  );
}
