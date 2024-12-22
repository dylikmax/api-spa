export default function UserCard({ user }) {
  const { name, username, email, phone, avatarUrl } = user;

  return (
    <div className="grid bg-slate-700 rounded-lg p-5 gap-2 h-96 hover:bg-slate-300 hover:text-slate-800 duration-100">
      <img
        src={avatarUrl ? avatarUrl : "/avatar.svg"}
        className="w-40 h-40 rounded-full justify-self-center"
      />
      <div className="grid self-start">
        <span className="font-black text-2xl">{name}</span>
        <span>{username}</span>
      </div>
      <div className="grid self-end">
        <span className="text-sm font-light">{email}</span>
        <span className="text-sm font-light">{phone}</span>
      </div>
    </div>
  );
}
