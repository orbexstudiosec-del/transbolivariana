/**
 * Carretera con un camión que la recorre durante cada diapositiva del slider.
 * Hace de barra de progreso: al terminar el recorrido llama a `onArrive`.
 */
export function TruckRoad({ duration, paused, onArrive }: { duration: number; paused: boolean; onArrive: () => void }) {
  return (
    <div className={`relative h-9 flex-1 sm:h-11 ${paused ? "truck-paused" : ""}`} aria-hidden>
      {/* Carretera: línea punteada y tramo recorrido */}
      <div className="absolute inset-x-0 bottom-0 border-b-2 border-dashed border-white/25" />
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-400"
        style={{ animation: `road-fill ${duration}ms linear forwards` }}
      />
      {/* El ancho descuenta el del camión para que llegue justo al final */}
      <div
        className="absolute bottom-0.5 left-0 w-[calc(100%-72px)] sm:w-[calc(100%-92px)]"
        style={{ animation: `truck-drive ${duration}ms linear forwards` }}
        onAnimationEnd={(e) => e.animationName === "truck-drive" && onArrive()}
      >
        <Truck className="w-[72px] sm:w-[92px]" />
      </div>
    </div>
  );
}

function Truck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 44" overflow="visible" className={className}>
      {/* Humo del escape */}
      <circle className="truck-smoke" cx="77.5" cy="1" r="2.5" fill="#fff" />
      <circle className="truck-smoke" style={{ animationDelay: "0.6s" }} cx="77.5" cy="1" r="2.5" fill="#fff" />

      <g className="truck-body">
        {/* Remolque */}
        <rect x="2" y="6" width="73" height="26" rx="2.5" fill="#fff" />
        <rect x="2" y="25" width="73" height="3.5" fill="#1f7fd6" />
        {/* Logo en el remolque */}
        <image href="/brand/logo.png" x="5" y="7.5" width="67" height="16.75" preserveAspectRatio="xMidYMid meet" />
        {/* Cabina */}
        <path d="M80 12 H99 L110 23 Q113 24.5 113 28 V35 H80 Z" fill="#1f7fd6" />
        <path d="M95 15 H98.5 L106 23 H95 Z" fill="#e3f0fc" />
        <rect x="84" y="15" width="8" height="8" rx="1" fill="#e3f0fc" opacity="0.85" />
        <rect x="76" y="2" width="3" height="12" rx="1" fill="#8a92a1" />
        <rect x="110" y="27" width="4" height="3" rx="1" fill="#ffd34d" />
        {/* Chasis */}
        <rect x="4" y="32" width="110" height="3" rx="1.5" fill="#062a4d" />
      </g>

      {/* Ruedas */}
      {[16, 30, 88, 104].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="37" r="6.5" fill="#041a30" stroke="#fff" strokeWidth="1.5" />
          <g className="truck-wheel">
            <circle cx={cx} cy="37" r="3.2" fill="none" stroke="#8a92a1" strokeWidth="1.2" />
            <path d={`M${cx - 3.2} 37 H${cx + 3.2} M${cx} 33.8 V40.2`} stroke="#8a92a1" strokeWidth="1.2" />
          </g>
        </g>
      ))}
    </svg>
  );
}
