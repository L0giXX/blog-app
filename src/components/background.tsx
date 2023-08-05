export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 pt-1">
      {children}
    </div>
  );
}
