import React from "react";

interface FlagProps {
  className?: string;
}

export function FlagUS({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="United States Flag">
      <g fillRule="evenodd">
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640" />
        <path fill="#192f5d" d="M0 0h260v258.5H0z" />
        <g fill="#fff">
          <circle cx="35" cy="30" r="7" />
          <circle cx="95" cy="30" r="7" />
          <circle cx="155" cy="30" r="7" />
          <circle cx="215" cy="30" r="7" />
          <circle cx="65" cy="65" r="7" />
          <circle cx="125" cy="65" r="7" />
          <circle cx="185" cy="65" r="7" />
          <circle cx="35" cy="100" r="7" />
          <circle cx="95" cy="100" r="7" />
          <circle cx="155" cy="100" r="7" />
          <circle cx="215" cy="100" r="7" />
          <circle cx="65" cy="135" r="7" />
          <circle cx="125" cy="135" r="7" />
          <circle cx="185" cy="135" r="7" />
          <circle cx="35" cy="170" r="7" />
          <circle cx="95" cy="170" r="7" />
          <circle cx="155" cy="170" r="7" />
          <circle cx="215" cy="170" r="7" />
          <circle cx="65" cy="205" r="7" />
          <circle cx="125" cy="205" r="7" />
          <circle cx="185" cy="205" r="7" />
          <circle cx="130" cy="235" r="6" />
        </g>
      </g>
    </svg>
  );
}

export function FlagSA({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="Saudi Arabia Flag">
      <rect width="640" height="480" fill="#006C35" />
      {/* Arabic Script & Sword representation */}
      <g fill="#FFFFFF">
        {/* Stylized Arabic calligraphy text */}
        <path d="M140 180h360v22H140zM170 145h300v20H170zM210 215h220v18H210z" opacity="0.95" />
        {/* Saber / Sword */}
        <path d="M160 270h300c10 0 20 5 20 10s-10 10-20 10H160v-20z" />
        <path d="M150 260h15v40h-15z" />
        <circle cx="145" cy="280" r="8" />
      </g>
    </svg>
  );
}

export function FlagES({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="Spain Flag">
      <rect width="640" height="120" fill="#AA151B" />
      <rect y="120" width="640" height="240" fill="#F1BF00" />
      <rect y="360" width="640" height="120" fill="#AA151B" />
      {/* Coat of arms shield */}
      <g transform="translate(140, 180) scale(0.7)">
        <rect x="0" y="0" width="70" height="90" rx="15" fill="#AA151B" stroke="#800" strokeWidth="4" />
        <circle cx="35" cy="45" r="18" fill="#F1BF00" />
        <path d="M-15 -10h100v10h-100z" fill="#AA151B" />
      </g>
    </svg>
  );
}

export function FlagFR({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="France Flag">
      <rect width="213.3" height="480" fill="#002654" />
      <rect x="213.3" width="213.4" height="480" fill="#FFFFFF" />
      <rect x="426.7" width="213.3" height="480" fill="#ED2939" />
    </svg>
  );
}

export function FlagDE({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="Germany Flag">
      <rect width="640" height="160" fill="#000000" />
      <rect y="160" width="640" height="160" fill="#DD0000" />
      <rect y="320" width="640" height="160" fill="#FFCE00" />
    </svg>
  );
}

export function FlagCN({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="China Flag">
      <rect width="640" height="480" fill="#EE1C25" />
      {/* Big star */}
      <polygon points="120,50 135,95 180,95 145,125 160,170 120,140 80,170 95,125 60,95 105,95" fill="#FFFF00" />
      {/* 4 Small stars */}
      <polygon points="210,40 215,55 230,55 218,65 223,80 210,70 197,80 202,65 190,55 205,55" fill="#FFFF00" />
      <polygon points="245,80 250,95 265,95 253,105 258,120 245,110 232,120 237,105 225,95 240,95" fill="#FFFF00" />
      <polygon points="245,140 250,155 265,155 253,165 258,180 245,170 232,180 237,165 225,155 240,155" fill="#FFFF00" />
      <polygon points="210,185 215,200 230,200 218,210 223,225 210,215 197,225 202,210 190,200 205,200" fill="#FFFF00" />
    </svg>
  );
}

export function FlagJA({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs border border-slate-200/40`} viewBox="0 0 640 480" aria-label="Japan Flag">
      <rect width="640" height="480" fill="#FFFFFF" />
      <circle cx="320" cy="240" r="144" fill="#BC002D" />
    </svg>
  );
}

export function FlagPK({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="Pakistan Flag">
      {/* White hoist bar (1/4 width) */}
      <rect width="160" height="480" fill="#FFFFFF" />
      {/* Deep dark green field (3/4 width) */}
      <rect x="160" width="480" height="480" fill="#01411C" />
      {/* White Crescent and Star */}
      <g fill="#FFFFFF" transform="translate(400, 240) rotate(-45)">
        <circle cx="0" cy="0" r="110" />
        <circle cx="32" cy="-10" r="95" fill="#01411C" />
        <polygon points="40,-45 46,-30 62,-30 49,-20 54,-5 40,-15 26,-5 31,-20 18,-30 34,-30" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function FlagIN({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="India Flag">
      <rect width="640" height="160" fill="#FF9933" />
      <rect y="160" width="640" height="160" fill="#FFFFFF" />
      <rect y="320" width="640" height="160" fill="#138808" />
      {/* Ashoka Chakra */}
      <g transform="translate(320, 240)">
        <circle r="60" fill="none" stroke="#000080" strokeWidth="8" />
        <circle r="12" fill="#000080" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line key={deg} x1="0" y1="-60" x2="0" y2="60" stroke="#000080" strokeWidth="3" transform={`rotate(${deg})`} />
        ))}
      </g>
    </svg>
  );
}

export function FlagBR({ className = "w-5 h-3.5" }: FlagProps) {
  return (
    <svg className={`${className} rounded-xs shrink-0 shadow-xs`} viewBox="0 0 640 480" aria-label="Brazil Flag">
      <rect width="640" height="480" fill="#009739" />
      <polygon points="320,50 590,240 320,430 50,240" fill="#FEDD00" />
      <circle cx="320" cy="240" r="105" fill="#012169" />
      <path d="M225 250 Q320 220 415 255" stroke="#FFFFFF" strokeWidth="16" fill="none" />
    </svg>
  );
}
