const flags = {
  th: (
    <svg viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#A51931" />
      <rect y="2.67" width="24" height="2.67" fill="#F4F5F8" />
      <rect y="5.33" width="24" height="5.33" fill="#2D2A4A" />
      <rect y="10.67" width="24" height="2.67" fill="#F4F5F8" />
    </svg>
  ),
  en: (
    <svg viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#B22234" />
      <rect y="1.23" width="24" height="1.23" fill="#fff" />
      <rect y="3.69" width="24" height="1.23" fill="#fff" />
      <rect y="6.15" width="24" height="1.23" fill="#fff" />
      <rect y="8.62" width="24" height="1.23" fill="#fff" />
      <rect y="11.08" width="24" height="1.23" fill="#fff" />
      <rect y="13.54" width="24" height="1.23" fill="#fff" />
      <rect width="9.6" height="8.62" fill="#3C3B6E" />
    </svg>
  ),
  zh: (
    <svg viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#DE2910" />
      <polygon
        fill="#FFDE00"
        points="4.5,2.5 5.35,4.95 7.95,4.95 5.8,6.5 6.65,8.95 4.5,7.4 2.35,8.95 3.2,6.5 1.05,4.95 3.65,4.95"
      />
      <polygon fill="#FFDE00" points="9.2,1.6 9.45,2.35 10.25,2.35 9.6,2.8 9.85,3.55 9.2,3.1 8.55,3.55 8.8,2.8 8.15,2.35 8.95,2.35" />
      <polygon fill="#FFDE00" points="10.8,3.4 11.05,4.15 11.85,4.15 11.2,4.6 11.45,5.35 10.8,4.9 10.15,5.35 10.4,4.6 9.75,4.15 10.55,4.15" />
      <polygon fill="#FFDE00" points="10.8,6.6 11.05,7.35 11.85,7.35 11.2,7.8 11.45,8.55 10.8,8.1 10.15,8.55 10.4,7.8 9.75,7.35 10.55,7.35" />
      <polygon fill="#FFDE00" points="9.2,8.4 9.45,9.15 10.25,9.15 9.6,9.6 9.85,10.35 9.2,9.9 8.55,10.35 8.8,9.6 8.15,9.15 8.95,9.15" />
    </svg>
  ),
}

export default function FlagIcon({ code, className = '' }) {
  return (
    <span className={`flag-icon ${className}`}>
      {flags[code] ?? flags.en}
    </span>
  )
}
