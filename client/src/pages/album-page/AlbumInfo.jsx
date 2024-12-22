import { Link } from "react-router-dom";

export default function AlbumInfo({album, user}) {
  return (
    <div className="flex gap-5 bg-slate-700 rounded-lg p-5">
      <img src="/icons/album.svg" className="h-24" />
      <div className="grid">
        <span className="text-4xl font-bold">{album.title}</span>
        <div className="flex gap-2">
          Created by
          <Link to={`/users/${user.id}`}>
            <span className="py-2 px-1 text-slate-300 rounded-lg hover:bg-slate-300 hover:text-slate-800 duration-100">
              {user.name}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
