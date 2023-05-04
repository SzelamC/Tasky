import Link from 'next/link';

type NavigationLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function NavigationLink({
  href,
  children,
  className,
}: NavigationLinkProps) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
