export default function RegisterForm() {
  return (
    <form className="w-96 p-10 bg-slate-100 shadow-lg rounded-3xl flex flex-col gap-5">
      <div className="flex flex-col">
        <label htmlFor="email" className="ml-4">
          Email
        </label>
        <input
          id="email"
          placeholder="Email address"
          type="text"
          className="w-full h-10 outline-none rounded-3xl border px-2 text-center"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="ml-4">
          Password
        </label>
        <input
          id="password"
          placeholder="Password"
          type="password"
          className="w-full h-10 outline-none rounded-3xl border px-2 text-center"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="ml-4">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          className="w-full h-10 outline-none rounded-3xl border px-2 text-center"
        />
      </div>
      <div className="flex gap-2">
        <input id="rules" type="checkbox" />
        <label htmlFor="rules">
          I accept the{" "}
          <a href="#" className="text-blue-500 border-blue-400 border-b-2">
            conditions
          </a>
        </label>
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
