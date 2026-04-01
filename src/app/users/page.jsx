import Link from "next/link";

function Users() {
  return (
    <main>
      <h1>Users Dashboard</h1>

      <ul>
        <li className="bg-amber-500 text-3xl">
          <Link href={"/users/1"}>User 1</Link>
        </li>
        <li className="bg-amber-500 text-3xl">
          <Link href={"/users/2"}>User 2</Link>
        </li>
        <li className="bg-amber-500 text-3xl">
          <Link href={"/users/3"}>User 3</Link>
        </li>
      </ul>
    </main>
  );
}

export default Users;
