export function DiagonalBadge({ children }: { children: string }) {
  return (
    <span
      className={`
        absolute top-3 left-3 px-6 py-1 text-xs font-bold uppercase
        text-white bg-defensya-blue/80 overflow-hidden
        clip-path-diagonal inline-flex items-center justify-center
      `}
    >
      <span className="relative z-10">{children}</span>
    </span>
  );
}