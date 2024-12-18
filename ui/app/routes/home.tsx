import { Link } from "react-router";
import type { Route } from "./+types/home";
import { buttonVariants } from "~/components/ui/button";
import { Cog } from "lucide-react";
import HowItWorksSection from "~/home/how-it-works";
import Footer from "~/home/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Orçamento Auto" },
    {
      name: "description",
      content:
        "Orçamento de peças e serviços para seu veículo de forma rápida e automatizada pelo Whatsapp!",
    },
  ];
}

export default function Home() {
  return (
    <>
      <header className="m-auto flex max-w-4xl items-center justify-between py-3">
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
      </header>
      <main className="flex flex-col items-center justify-center pt-32">
        <div className="flex max-w-xl flex-col justify-center">
          <h2 className="text-center text-4xl font-bold">
            Orçamento de peças e serviços para seu veículo&nbsp;
            <span className="animate-pulse bg-gradient-to-r from-sky-400 via-sky-600 to-emerald-500 bg-clip-text text-4xl font-extrabold text-transparent">
              num zap!
            </span>
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link className={`${buttonVariants()}`} to="/#pf">
              Para pessoas físicas
            </Link>
            <Link
              className={`${buttonVariants({ variant: "outline" })}`}
              to="/#auto"
            >
              Para oficinas e autopeças
            </Link>
          </div>
        </div>
        <HowItWorksSection />
      </main>
      <Footer />
    </>
  );
}
