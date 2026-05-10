interface DecorativeCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export default function DecorativeCorner({ position, className = '' }: DecorativeCornerProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180'
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M0 0L0 30" stroke="#D4AF37" strokeWidth="1" opacity="0.4"/>
        <path d="M0 0L30 0" stroke="#D4AF37" strokeWidth="1" opacity="0.4"/>
        <path d="M0 10L10 0" stroke="#D4AF37" strokeWidth="1" opacity="0.3"/>
      </svg>
    </div>
  );
}
