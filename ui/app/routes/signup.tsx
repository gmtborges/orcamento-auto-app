import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Cog, User } from "lucide-react";
import { Link } from "react-router";

export default function SignUp() {
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
                <User />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              Cadastro Pessoa Física
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Input type="text" placeholder="Nome" className="w-full" />
              <Input type="text" placeholder="CEP" className="w-full" />
              <Input type="tel" placeholder="WhatsApp" className="w-full" />
              <Button className="w-full">Criar conta</Button>
            </div>

            <p className="text-center text-sm text-gray-500">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Termos e Política de Privacidade
              </a>
            </p>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-sm text-gray-600">
          Já possui uma conta?{" "}
          <Link
            to="/entrar"
            className="font-medium text-blue-500 hover:underline"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
