import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Link } from "react-router";
import { Cog } from "lucide-react";

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="rounded-full bg-blue-600 p-2">
            <Cog className="text-white" />
          </span>
          <h1 className="text-2xl font-bold">Orçamento Auto</h1>
        </div>
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <div className="mb-2 flex justify-center">
              <div className="rounded-full bg-gray-100 p-2">
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <CardDescription>Entre com seu número de WhatsApp</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <Input type="tel" placeholder="WhatsApp" className="w-full" />
              </div>

              <Button className="w-full">Entrar</Button>
            </div>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
        </p>
        <p className="mt-4 text-center text-sm text-gray-600">
          <Link
            to="/cadastrar-pf"
            className="font-medium text-blue-500 hover:underline"
          >
            Cadastre como pessoa física
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-gray-600">
          <Link
            to="/cadastrar-auto"
            className="font-medium text-blue-500 hover:underline"
          >
            Cadastre como prestador
          </Link>
        </p>
      </div>
    </div>
  );
}
