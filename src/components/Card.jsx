// Card component for boxed layout
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/30 dark:border-gray-700/30 animate-fade-in transition-all duration-300 ease-in-out ${className}`}
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)", }}
    >
      {children}
    </div>
  );
}
