import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterType } from "../../../schemas/RegisterSchema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 p-10 bg-slate-100 shadow-lg rounded-3xl flex flex-col gap-5"
    >
      <div className="flex flex-col">
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
      <div className="flex flex-col">
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
        <label htmlFor="confirmPassword" className="ml-4">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          className="w-full h-10 outline-none rounded-3xl border px-2 text-center"
        />
      </div>
      <div className="flex flex-col">
        {errors.rules && <p className="text-red-500">{errors.rules.message}</p>}
        <div className="flex gap-2">
          <input id="rules" type="checkbox" {...register("rules")} />
          <label htmlFor="rules">
            I accept the{" "}
            <a href="#" className="text-blue-500 border-blue-400 border-b-2">
              conditions
            </a>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="h-10 mt-5 py-2 px-4 transition-colors duration-300 bg-slate-400 hover:bg-slate-300 text-slate-700 font-bold rounded"
      >
        Submit
      </button>
    </form>
  );
}
