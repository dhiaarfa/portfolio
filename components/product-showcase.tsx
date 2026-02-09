"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductViewer from "@/components/product-viewer"

const products = [
  {
    id: "eco-chair",
    name: "Chaise Écologique",
    description: "Fabriquée à partir de matériaux recyclés, cette chaise allie confort et respect de l'environnement.",
    price: "€199",
    modelPath: "/models/eco-chair.glb",
  },
  {
    id: "bamboo-lamp",
    name: "Lampe en Bambou",
    description: "Lampe élégante en bambou durable avec éclairage LED à faible consommation d'énergie.",
    price: "€129",
    modelPath: "/models/bamboo-lamp.glb",
  },
  {
    id: "recycled-table",
    name: "Table Recyclée",
    description: "Table basse fabriquée à partir de bois récupéré, chaque pièce est unique et écologique.",
    price: "€349",
    modelPath: "/models/recycled-table.glb",
  },
]

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(products[0])

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
              Nos Produits
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Collection Éco-Responsable</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explorez notre gamme de produits conçus avec des matériaux durables et des processus de fabrication
              respectueux de l'environnement.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30">
              <ProductViewer modelPath={activeProduct.modelPath} />
            </div>
          </motion.div>
          <div className="flex flex-col justify-center space-y-8">
            <Tabs
              defaultValue={products[0].id}
              onValueChange={(value) => {
                const product = products.find((p) => p.id === value)
                if (product) setActiveProduct(product)
              }}
            >
              <TabsList className="grid w-full grid-cols-3">
                {products.map((product) => (
                  <TabsTrigger key={product.id} value={product.id}>
                    {product.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {products.map((product) => (
                <TabsContent key={product.id} value={product.id} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold">{product.name}</h3>
                          <p className="text-gray-500 dark:text-gray-400">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-teal-600 dark:text-teal-400">{product.price}</span>
                            <Button>Ajouter au panier</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Caractéristiques principales</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-teal-500"></div>
                  <span>Matériaux 100% recyclés ou durables</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-teal-500"></div>
                  <span>Fabrication locale et artisanale</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-teal-500"></div>
                  <span>Emballage minimal et biodégradable</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-teal-500"></div>
                  <span>Garantie de 5 ans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
