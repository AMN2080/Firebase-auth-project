import { LoginForm, RegisterForm, MainPage } from "./components/templates";

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
