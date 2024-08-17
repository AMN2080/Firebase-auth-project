import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const signOutHandler = async () => {
    const result = await doSignOut();
    console.log(result);
    navigate("/auth/login");
  };

  return (
    <div>
      <p>welcome</p>
      <button
        className="h-10 mt-5 py-2 px-4 transition-colors duration-300 bg-slate-400 hover:bg-slate-300 text-slate-700 font-bold rounded"
        onClick={signOutHandler}
      >
        Sign out
      </button>
    </div>
  );
}
