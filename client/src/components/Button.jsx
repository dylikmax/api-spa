import { Link } from "react-router-dom";

export default function Button({ path, value }) {
  return (
    <Link
      to={`${path}`}
      className="flex items-center bg-slate-500 rounded py-0.5 px-4 hover:bg-slate-600 hover:text-slate-400 duration-100 w-min whitespace-nowrap"
    >
      {value}
    </Link>
  );
}
