export default function Photo({ photo }) {
    const { title, url } = photo;
  
    return (
      <div className="flex flex-col bg-slate-700 rounded-lg p-5 gap-3 h-96">
        <img
          src={url}
          className="w-full h-auto justify-self-center rounded-lg"
        />
        <span>{title}</span>
      </div>
    );
  }
  