import dynamic from "next/dynamic";

const ProductClientPage = dynamic(() => import("./ProductClientPage"), { ssr: false });

export default function Page(props) {
  return <ProductClientPage {...props} />;
}
