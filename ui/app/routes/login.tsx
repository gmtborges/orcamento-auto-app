import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { User, Building2, Phone } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [whatsappPF, setWhatsappPF] = useState("");
  const [whatsappPJ, setWhatsappPJ] = useState("");
  const [cnpj, setCnpj] = useState("");

  const handlePFSubmit = (e) => {
    e.preventDefault();
    // Add your WhatsApp validation and login logic here
    console.log("PF Login:", whatsappPF);
  };

  const handlePJSubmit = (e) => {
    e.preventDefault();
    // Add your CNPJ and WhatsApp validation and login logic here
    console.log("PJ Login:", { whatsapp: whatsappPJ, cnpj });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Orçamento Auto</CardTitle>
          <CardDescription>
            Crie sua conta para usar nossos serviços.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pf" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="pf" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Pessoa Física
              </TabsTrigger>
              <TabsTrigger value="pj" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Auto Peças e Oficinas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pf">
              <form onSubmit={handlePFSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp-pf">Número do WhatsApp</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="whatsapp-pf"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="pl-10"
                      value={whatsappPF}
                      onChange={(e) => setWhatsappPF(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="pj">
              <form onSubmit={handlePJSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input
                    id="cnpj"
                    type="text"
                    placeholder="00.000.000/0001-00"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp-pj">Número do WhatsApp</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="whatsapp-pj"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="pl-10"
                      value={whatsappPJ}
                      onChange={(e) => setWhatsappPJ(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
