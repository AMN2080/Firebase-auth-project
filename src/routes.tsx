import { LoginForm, RegisterForm, MainPage } from "./pages";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
    ],
  },
];

export default routes;
