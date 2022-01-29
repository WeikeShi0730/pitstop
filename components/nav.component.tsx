import Link from "next/link";

const Nav = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
