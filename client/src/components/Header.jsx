import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import DisabledButton from "./DisabledButton";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between py-5 px-20 bg-slate-700 rounded-b-lg">
      <h1 className="text-4xl font-bold">API & SPA</h1>
      <div className="flex gap-10">
        {location.pathname === "/albums" ? (
          <DisabledButton value="Albums" />
        ) : (
          <Button path="/albums" value="Albums" />
        )}
        {location.pathname === "/users" ? (
          <DisabledButton value="Users" />
        ) : (
          <Button path="/users" value="Users" />
        )}
      </div>
    </header>
  );
}
