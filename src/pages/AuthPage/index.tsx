import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className="w-full h-screen bg-slate-600 flex justify-center items-center">
      <Outlet />
    </div>
  );
}
