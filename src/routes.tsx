import { LoginForm, RegisterForm } from "./components/templates";
import { AuthPage, MainPage } from "./pages";

const routes = [
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
    ],
  },
  { path: "/", element: <MainPage /> },
];

export default routes;
