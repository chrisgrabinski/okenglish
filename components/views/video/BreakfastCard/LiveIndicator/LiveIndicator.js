export default function LiveIndicator() {
  return (
    <div className="inline-flex items-center h-6 px-2 bg-red-500 rounded-lg font-medium text-xs uppercase">
      <svg viewBox="0 0 8 8" className="h-2 text-white fill-current">
        <circle cx="4" cy="4" r="4" />
      </svg>
      <span className="pl-1">Live now</span>
    </div>
  );
}
