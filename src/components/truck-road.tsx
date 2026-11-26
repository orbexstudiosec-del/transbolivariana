/**
 * Carretera con un camión que la recorre durante cada diapositiva del slider.
 * Hace de barra de progreso: al terminar el recorrido llama a `onArrive`.
 */
export function TruckRoad({ duration, onArrive }: { duration: number; onArrive: () => void }) {
  return (
    <div className="relative h-14 flex-1 sm:h-16" aria-hidden>
      {/* Asfalto con línea central y el tramo ya recorrido */}
      <div className="absolute inset-x-0 bottom-0 h-2.5 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10 sm:h-3">
        <div
          className="absolute inset-y-0 left-0 w-full origin-left bg-linear-to-r from-brand-600/70 to-brand-400"
          style={{ animation: `road-fill ${duration}ms linear forwards` }}
        />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-white/50" />
      </div>

      {/* Destino: se ilumina cuando llega el camión */}
      <div className="absolute right-0 bottom-3.5 sm:bottom-4" style={{ animation: `pin-arrive ${duration}ms linear forwards` }}>
        <span className="absolute inset-x-0 -bottom-1 mx-auto size-2 animate-ping rounded-full bg-brand-400" />
        <svg viewBox="0 0 24 30" className="relative h-6 w-5 drop-shadow sm:h-7 sm:w-6">
          <path d="M12 1C6 1 1.5 5.6 1.5 11.4 1.5 19 12 29 12 29s10.5-10 10.5-17.6C22.5 5.6 18 1 12 1Z" fill="currentColor" />
          <circle cx="12" cy="11.5" r="4" fill="#062a4d" />
        </svg>
      </div>

      {/* El ancho descuenta el del camión y el del destino para que se detenga justo antes del pin */}
      <div
        className="absolute bottom-1.5 left-0 w-[calc(100%-128px)] sm:w-[calc(100%-160px)]"
        style={{ animation: `truck-drive ${duration}ms linear forwards` }}
        onAnimationEnd={(e) => e.animationName === "truck-drive" && onArrive()}
      >
        <Truck className="w-[104px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)] sm:w-[132px]" />
      </div>
    </div>
  );
}

function Truck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 52" overflow="visible" className={className}>
      <defs>
        <linearGradient id="truck-beam" x1="0" x2="1">
          <stop offset="0" stopColor="#ffe48a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffe48a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="truck-cab" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3b97e8" />
          <stop offset="1" stopColor="#1665b0" />
        </linearGradient>
      </defs>

      {/* Líneas de velocidad */}
      {[14, 22, 30].map((y, i) => (
        <rect key={y} className="truck-speed" style={{ animationDelay: `${i * 0.18}s` }} x="-18" y={y} width="14" height="1.6" rx="0.8" fill="#fff" />
      ))}

      {/* Humo del escape */}
      <circle className="truck-smoke" cx="119" cy="0" r="2.6" fill="#fff" />
      <circle className="truck-smoke" style={{ animationDelay: "0.6s" }} cx="119" cy="0" r="2.6" fill="#fff" />

      {/* Haz de luz del faro */}
      <path d="M156 28 L190 22 L190 38 Z" fill="url(#truck-beam)" />

      <g className="truck-body">
        {/* Remolque */}
        <rect x="2" y="3" width="98" height="33" rx="3" fill="#fff" />
        <rect x="2" y="29" width="98" height="4" fill="#1f7fd6" />
        <rect x="2" y="33" width="98" height="1.5" fill="#062a4d" opacity="0.25" />
        <image href="/brand/logo.png" x="9" y="6" width="84" height="21" preserveAspectRatio="xMidYMid meet" />
        {/* Puertas traseras */}
        <path d="M4.5 5 V33" stroke="#d6dde6" strokeWidth="0.8" />

        {/* Enganche entre remolque y cabina */}
        <rect x="99" y="31" width="6" height="6" rx="1" fill="#062a4d" />

        {/* Tubo de escape */}
        <rect x="117.5" y="1" width="3" height="16" rx="1.2" fill="#b8c0cc" />

        {/* Cabina con dormitorio */}
        <path d="M104 12 Q104 9 107 9 H131 Q134 9 136 12 L143 22 H151 Q156 22 156 27 V39 H104 Z" fill="url(#truck-cab)" />
        <rect x="108" y="13" width="9" height="7" rx="1.2" fill="#cfe5fa" opacity="0.75" />
        <path d="M124 12.5 H132 Q133.5 12.5 134.5 14 L140.5 22 H124 Z" fill="#e3f0fc" />
        <path d="M121 12 V38" stroke="#0f4f8f" strokeWidth="0.8" />
        {/* Espejo */}
        <rect x="140" y="12" width="1.6" height="8" rx="0.8" fill="#062a4d" />
        {/* Parrilla y faro */}
        <path d="M152.5 29 V36 M154.5 29 V36" stroke="#0f4f8f" strokeWidth="1" />
        <rect x="151.5" y="24.5" width="4.5" height="3" rx="1" fill="#ffd34d" />
        {/* Tanque de combustible */}
        <rect x="124" y="34" width="12" height="6" rx="3" fill="#d6dde6" />

        {/* Chasis */}
        <rect x="6" y="36" width="150" height="3.5" rx="1.5" fill="#062a4d" />
        {/* Guardafango trasero */}
        <path d="M40 36 V44" stroke="#062a4d" strokeWidth="2" />
      </g>

      {/* Ruedas */}
      {[18, 33, 112, 147].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="44" r="7.5" fill="#041a30" stroke="#2a3a4f" strokeWidth="1.2" />
          <g className="truck-wheel">
            <circle cx={cx} cy="44" r="3.8" fill="#8a92a1" />
            <path d={`M${cx - 3.8} 44 H${cx + 3.8} M${cx} 40.2 V47.8`} stroke="#041a30" strokeWidth="1" />
          </g>
        </g>
      ))}
    </svg>
  );
}
