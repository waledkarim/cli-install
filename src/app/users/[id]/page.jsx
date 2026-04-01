async function UserDetails({ params }) {
  const { id } = await params;
  return <h1 className="font-bold text-5xl">Hello User #{id}</h1>;
}

export default UserDetails;
