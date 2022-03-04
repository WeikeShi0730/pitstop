import Link from "next/link";
const NoScrollLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link scroll={false} href={href}>
      {children}
    </Link>
  );
};

export default NoScrollLink;
