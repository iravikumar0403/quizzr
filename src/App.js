import { useRoutes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { routes } from "./config/routes-config";

const App = () => {
  const routesElement = useRoutes(routes);
  return (
    <>
      <Navbar />
      {routesElement}
      <Footer />
    </>
  );
};

export default App;
