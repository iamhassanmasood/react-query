import { QueryClient, QueryClientProvider } from "react-query";
import ProductsListContainer from "./containers/ProductsList";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsListContainer />;
    </QueryClientProvider>
  );
}

export default App;
