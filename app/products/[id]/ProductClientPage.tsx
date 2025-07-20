"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react"
import ProductViewer from "@/components/product-viewer"

interface Product {
  name: string
  description: string
  price: string
  modelPath: string
  features: string[]
  specs: { [key: string]: string }
}

interface Products {
  [key: string]: Product
}

interface ProductClientPageProps {
  products: Products
}

export default function ProductClientPage({ products }: ProductClientPageProps) {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  useEffect(() => {
    const id = params.id as string
    if (products[id as keyof typeof products]) {
      setProduct(products[id as keyof typeof products])
    }
  }, [params, products])

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Chargement du produit...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 py-12 md:px-6 md:py-20">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux produits
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30">
            <ProductViewer modelPath={product.modelPath} />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="mt-2 text-3xl font-bold text-teal-600 dark:text-teal-400">{product.price}</p>
            </div>

            <div className="space-y-2">
              <div className="flex space-x-4">
                <button
                  className={`border-b-2 pb-2 text-sm font-medium ${activeTab === "description" ? "border-teal-500 text-teal-600 dark:text-teal-400" : "border-transparent text-gray-500 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`border-b-2 pb-2 text-sm font-medium ${activeTab === "features" ? "border-teal-500 text-teal-600 dark:text-teal-400" : "border-transparent text-gray-500 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("features")}
                >
                  Caractéristiques
                </button>
                <button
                  className={`border-b-2 pb-2 text-sm font-medium ${activeTab === "specs" ? "border-teal-500 text-teal-600 dark:text-teal-400" : "border-transparent text-gray-500 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("specs")}
                >
                  Spécifications
                </button>
              </div>

              <div className="pt-4">
                {activeTab === "description" && (
                  <p className="text-gray-500 dark:text-gray-400">{product.description}</p>
                )}

                {activeTab === "features" && (
                  <ul className="space-y-2">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-teal-500"></div>
                        <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "specs" && (
                  <div className="space-y-2">
                    {Object.entries(product.specs).map(([key, value]: [string, any], index: number) => (
                      <div
                        key={index}
                        className="flex justify-between border-b border-gray-200 pb-2 dark:border-gray-800"
                      >
                        <span className="font-medium">{key}</span>
                        <span className="text-gray-500 dark:text-gray-400">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center rounded-md border border-gray-200 dark:border-gray-800">
                  <button
                    className="px-3 py-1 text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{quantity}</span>
                  <button
                    className="px-3 py-1 text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Ajouter aux favoris</span>
                </Button>
              </div>

              <Button className="w-full gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700">
                <ShoppingCart className="h-5 w-5" />
                Ajouter au panier
              </Button>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-teal-100 p-2 dark:bg-teal-900/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Livraison écologique</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Livraison gratuite et neutre en carbone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
