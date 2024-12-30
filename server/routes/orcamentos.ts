import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"
import { z } from "zod"

export const routes = new Hono()

const schema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string(),
  carModel: z.string(),
  carBrand: z.string(),
  carYear: z.string(),
  carColor: z.string(),
  details: z.string(),
})

const postSchema = schema.omit({ id: true })

type Orcamento = z.infer<typeof schema>

const list: Orcamento[] = [
  {
    id: 1,
    title: "Revisão Completa",
    carModel: "Civic",
    carBrand: "Honda",
    carYear: "2022",
    carColor: "Prata",
    details: "Revisão de 30.000 km incluindo troca de óleo e filtros"
  },
  {
    id: 2,
    title: "Pintura Geral",
    carModel: "Corolla",
    carBrand: "Toyota",
    carYear: "2021",
    carColor: "Preto",
    details: "Pintura completa do veículo após pequena colisão"
  },
  {
    id: 3,
    title: "Troca de Embreagem",
    carModel: "Golf",
    carBrand: "Volkswagen",
    carYear: "2020",
    carColor: "Branco",
    details: "Substituição do kit de embreagem completo"
  }
]


routes.get("/", (c) => {
  return c.json(list)
})

routes.post("/", zValidator("json", postSchema), (c) => {
  const payload = c.req.valid("json")
  const orcamento = schema.parse(payload)
  return c.json(orcamento)
})
