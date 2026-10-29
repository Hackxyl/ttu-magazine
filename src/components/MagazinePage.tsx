import type { ReactNode } from "react";

interface MagazinePageProps {
  children: ReactNode;
  className?: string;
}

function MagazinePage({
  children,
  className = "",
}: MagazinePageProps) {
  return (
    <section className={`magazine-page ${className}`}>
      {children}
    </section>
  );
}

export default MagazinePage;