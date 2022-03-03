import Link from "next/link";
const NoScrollLink = ({ href, children }: any) => {
  return (
    <Link scroll={false} href={href}>
      {children}
    </Link>
  );
};

export default NoScrollLink;
