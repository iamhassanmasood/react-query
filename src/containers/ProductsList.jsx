import { QueryClient, QueryClientProvider } from "react-query";
import ProductsList from "../components/ProductsList";

const queryClient = new QueryClient();

const ProductsListContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsList />
    </QueryClientProvider>
  );
};

export default ProductsListContainer;
