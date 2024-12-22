export default function DisabledButton({value}) {
    return (
        <div
          className="flex items-center rounded py-0.5 px-4 bg-slate-600 text-slate-400"
        >
          {value}
        </div>
      );
}