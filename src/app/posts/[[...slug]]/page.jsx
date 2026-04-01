async function PostsPage({ params }) {
  const { slug } = await params;
  console.log(slug);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Could not fetch posts");
  }
  const posts = await res.json();

  return (
    <main>
      {posts.map((post, i) => (
        <p key={i}>{post.title}</p>
      ))}
    </main>
  );
}

export default PostsPage;
