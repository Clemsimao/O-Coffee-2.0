import { useParams } from "react-router-dom";
import NotFoundPage from "../pages/404.tsx";
import Product from "../pages/Product.tsx";
import type Coffee from "../types/Coffee";

interface ProductWrapperProps {
  allCoffees: Coffee[];
}

const ProductWrapper = ({ allCoffees }: ProductWrapperProps) => {
  const { id } = useParams<{ id: string }>();
  const product = allCoffees.find(coffee => coffee.id === Number(id));

  if (!product) return <NotFoundPage/>;

  return <Product product={product} />;
};

export default ProductWrapper;