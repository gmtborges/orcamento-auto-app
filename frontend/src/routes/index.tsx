import { buttonVariants } from '@/components/ui/button'
import Benefits from '@/home/benefits'
import BenefitsAuto from '@/home/benefits-auto'
import Footer from '@/home/footer'
import Header from '@/home/header'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-32">
        <div className="flex max-w-xl flex-col justify-center">
          <h2 className="text-center text-4xl font-bold">
            Orçamento de peças e serviços para seu veículo&nbsp;
            <span className="animate-pulse bg-gradient-to-r from-sky-400 via-sky-600 to-emerald-500 bg-clip-text text-4xl font-extrabold text-transparent">
              num zap!
            </span>
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link className={`${buttonVariants()}`} to="/cadastrar">
              Para pessoas físicas
            </Link>
            <Link
              className={`${buttonVariants({ variant: 'secondary' })}`}
              to="/cadastrar-auto"
            >
              Para autopeças e oficinas
            </Link>
          </div>
        </div>
        <Benefits />
        <BenefitsAuto />
      </main>
      <Footer />
    </>
  )
}
