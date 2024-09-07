import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const router = useRoutes(routes);
  
  return (
    <BrowserRouter>
      {router}
    </BrowserRouter>
  );
}
