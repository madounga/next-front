import Link from "next/link";

const indexpage = () => {
  return (
    <div>
      <h1>hello les gens</h1>
      <ul>
        <li>
          <Link href="/sign-in">
            <a>sign in</a>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
            <a>sign up</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default indexpage;
