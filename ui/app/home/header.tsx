import { Cog } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "~/components/ui/button";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`sticky top-0 z-30 px-3 py-3 backdrop-blur-lg transition-all ${scrollY > 64 && "border border-b"}}`}
    >
      <div className="m-auto flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-600 p-2">
            <Cog className="text-white" />
          </span>
          <h1 className="text-xl font-bold">Orçamento Auto</h1>
        </div>
        <nav>
          <ul>
            <a className={`${buttonVariants()} font-bold`} href="/entrar">
              Entrar
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
