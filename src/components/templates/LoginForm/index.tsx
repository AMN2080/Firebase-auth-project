import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "../../../schemas/LoginSchema";
import useAuthStore from "../../../stores/AuthStore";
import { Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { userLoggedIn } = useAuthStore();

  const onSubmit: SubmitHandler<LoginType> = async ({ email, password }) => {
    const result = await doSignInWithEmailAndPassword(email, password);
    console.log(result);
  };

  return (
    <>
      {userLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-96 p-10 bg-slate-100 shadow-lg rounded-3xl flex flex-col gap-5"
        >
          <div className="flex flex-col">
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label htmlFor="email" className="ml-4">
              Email
            </label>
            <input
              id="email"
              placeholder="Email address"
              type="text"
              {...register("email")}
              className="w-full h-10 outline-none rounded-3xl border px-2 text-center"
            />
          </div>
          <div className="flex flex-col">
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <label htmlFor="password" className="ml-4">
              Password
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              {...register("password")}
              className="w-full h-10 outline-none rounded-3xl border px-2 text-center"
            />
          </div>
          <button
            type="submit"
            className="h-10 mt-5 py-2 px-4 transition-colors duration-300 bg-slate-400 hover:bg-slate-300 text-slate-700 font-bold rounded"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}
