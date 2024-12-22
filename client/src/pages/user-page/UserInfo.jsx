export default function UserInfo({ user }) {
  return (
    <div className="bg-slate-700 rounded-lg p-5 flex gap-10 h-min w-2/3">
      <img
        src={user.avatarUrl ? user.avatarUrl : "/avatar.svg"}
        className="rounded-full h-60 w-60"
      />
      <div className="grid h-min gap-5">
        <div className="grid">
          <span className="text-4xl font-black">{user.name}</span>
          <span className="text-3xl">{user.username}</span>
        </div>
        <div className="grid">
          <span className="text-slate-300">Email: {user.email}</span>
          <span className="text-slate-300">Phone: {user.phone}</span>
        </div>
      </div>
    </div>
  );
}
