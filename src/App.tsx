import "./App.css";
import { Provider } from "./components/ui/provider";

// 開発時
// import { Routes } from "@generouted/react-router";

// github pagesへのデプロイ時
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@generouted/react-router";
const Routes = () => (
  <RouterProvider
    router={createBrowserRouter(routes, { basename: "/banana-photographer" })}
  />
);

function App() {
  return (
    <>
      <Provider>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
