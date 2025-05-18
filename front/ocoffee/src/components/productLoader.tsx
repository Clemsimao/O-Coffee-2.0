import { useParams } from "react-router-dom";
import Product from "../pages/Product.tsx";
import type Coffee from "../types/Coffee";

interface ProductWrapperProps {
  allCoffees: Coffee[];
}

const ProductWrapper = ({ allCoffees }: ProductWrapperProps) => {
  const { id } = useParams<{ id: string }>();
  const product = allCoffees.find(coffee => coffee.id === Number(id));

  if (!product) return <p>Produit introuvable.</p>;

  return <Product product={product} />;
};

export default ProductWrapper;