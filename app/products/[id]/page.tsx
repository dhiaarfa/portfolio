import ProductClientPage from "./ProductClientPage"

const products = {
  "eco-chair": {
    name: "Chaise Écologique",
    description:
      "Fabriquée à partir de matériaux recyclés, cette chaise allie confort et respect de l'environnement. Son design ergonomique s'adapte à tous les intérieurs et sa structure robuste garantit une durabilité exceptionnelle.",
    price: "€199",
    modelPath: "/models/eco-chair.glb",
    features: [
      "Matériaux 100% recyclés",
      "Design ergonomique",
      "Disponible en 5 coloris",
      "Assemblage sans outils",
      "Garantie 5 ans",
    ],
    specs: {
      Dimensions: "45 x 55 x 80 cm",
      Poids: "4.5 kg",
      Matériaux: "Plastique recyclé, bois certifié FSC",
      "Charge maximale": "120 kg",
    },
  },
  "bamboo-lamp": {
    name: "Lampe en Bambou",
    description:
      "Lampe élégante en bambou durable avec éclairage LED à faible consommation d'énergie. Son design naturel apporte une touche de chaleur à votre intérieur tout en respectant l'environnement.",
    price: "€129",
    modelPath: "/models/bamboo-lamp.glb",
    features: [
      "Bambou cultivé durablement",
      "LED basse consommation",
      "Variateur d'intensité",
      "Câble en tissu recyclé",
      "Garantie 5 ans",
    ],
    specs: {
      Dimensions: "30 x 30 x 45 cm",
      Poids: "1.2 kg",
      Matériaux: "Bambou, verre recyclé",
      Puissance: "8W LED",
    },
  },
  "recycled-table": {
    name: "Table Recyclée",
    description:
      "Table basse fabriquée à partir de bois récupéré, chaque pièce est unique et écologique. Son design intemporel s'intègre parfaitement dans tous les intérieurs et raconte une histoire de durabilité.",
    price: "€349",
    modelPath: "/models/recycled-table.glb",
    features: [
      "Bois 100% récupéré",
      "Pièce unique",
      "Finition à l'huile naturelle",
      "Pieds en acier recyclé",
      "Garantie 5 ans",
    ],
    specs: {
      Dimensions: "120 x 60 x 45 cm",
      Poids: "18 kg",
      Matériaux: "Bois récupéré, acier recyclé",
      "Charge maximale": "50 kg",
    },
  },
}

// Generate static params for all products
export async function generateStaticParams() {
  return Object.keys(products).map((id) => ({
    id: id,
  }))
}

export default function ProductPage() {
  return <ProductClientPage products={products} />
}
