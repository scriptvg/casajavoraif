interface ReserveButtonProps {
  formUrl: string;
  className?: string;
}

export function ReserveButton({ formUrl, className = '' }: ReserveButtonProps) {
  return (
    <button 
      onClick={() => window.open(formUrl, '_blank')}
      className={`w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <span>Reservar Clase</span>
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
        />
      </svg>
    </button>
  );
}
