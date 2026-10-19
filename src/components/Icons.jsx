export function LeafLogo({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path
        d="M48 12c-9.3 0-17.5 3.6-23.4 10.1C17.6 28.7 15 36.4 15 44.6c0 3.7 1 7 2.7 9.8 1.9 3.2 4.9 5.6 9.2 5.6 7.7 0 13.1-6.2 14.5-14 1.2-6 0.6-12-1.9-18.1C36.5 22.5 39.8 18.9 48 12ZM36.3 21.1c-1.8 6.2-4.6 10.5-9.1 13.7 2.3 0.6 5 0.9 8.3 0.9 4.3 0 8.8-1.1 12.1-3.3-2.1-5.4-5.7-9.6-11.3-11.3Z"
        fill={color}
      />
      <path
        d="M30.5 35.2c-1.8-7.3 1.8-15 9.6-19.7-4.1 4.5-5.7 10.6-4.6 17.3 1 5.8 5.6 10.7 11.3 12.7-5.7 2.2-11.8 1.4-16.3-10.3Z"
        fill={color}
        opacity="0.8"
      />
      <path d="M32 29.6v18.3M23.4 40l8.6-10.4 8.7 10.4" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function SeedlingLogo({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path d="M32 14v26" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <path d="M32 19c-8.5 0-15.5 7-15.5 15.5 0 1.8.3 3.5.9 5.1C21.1 34.7 26.7 32 32 32c5.3 0 10.9 2.7 14.6 7.6.6-1.6.9-3.3.9-5.1C47.5 26 40.5 19 32 19Z" fill={color} opacity="0.18"/>
      <path d="M19 35.5c6.2-3.6 12.8-5.4 19.5-5.4 5.8 0 11.2 1.4 16.5 4.2-5.1 7.2-12.5 11.8-20.7 12.7C27.8 48 22.5 44.1 19 35.5Z" fill={color} opacity="0.8"/>
      <path d="M20 24c3.7 1.5 7.5 2.2 11.6 2.2 4.6 0 8.8-1 12.9-2.9" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export function FarmLogo({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path d="M16 42h32" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <path d="M18 42V24l10-9h8l10 9v18" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 42V28h8v14" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <path d="M12 24h8M44 24h8" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="48" cy="18" r="4" fill={color} opacity="0.8"/>
    </svg>
  )
}

export function FarmerLogo({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <circle cx="32" cy="18" r="9" fill={color} opacity="0.22"/>
      <path d="M19 47c1.7-7.2 7.2-11 13-11s11.3 3.8 13 11" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <path d="M23 19c2.2-8.1 10.1-12.1 17.4-8.2 4.7 2.6 7.8 8.1 7.6 13.5-2.5-2.7-6.1-4.4-10.4-4.4-6.8 0-11.8 3.3-14.6 8.4" fill={color} opacity="0.8"/>
      <path d="M18 30c4.8-1.8 8.7-2.4 14-2.4 6.2 0 11.4 1.2 17 4.3" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export function LocationLogo({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path d="M32 52s17-14.1 17-28.4A17 17 0 0 0 15 23.6C15 37.9 32 52 32 52Z" stroke={color} strokeWidth="4" strokeLinejoin="round"/>
      <circle cx="32" cy="23" r="6" fill={color} opacity="0.75"/>
    </svg>
  )
}

export function WhatsAppIcon({ size = 22, color = 'currentColor', className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path
        d="M20.52 3.48a11.64 11.64 0 0 0-8.44-3.48A11.96 11.96 0 0 0 0 12.08c0 2.13.56 4.22 1.62 6.05L0 24l6.02-1.58a11.97 11.97 0 0 0 5.99 1.65h.01c6.62 0 12.04-5.42 12.04-12.08 0-3.22-1.26-6.26-3.54-8.51Zm-8.44 18.5h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.57.94 1-3.47-.23-.36A9.87 9.87 0 0 1 2.22 12c0-5.44 4.42-9.86 9.86-9.86 2.63 0 5.1 1.03 6.97 2.9a9.77 9.77 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.86 9.86Zm5.42-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.15-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.1-.18-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.57-.48-.49-.67-.5l-.57-.01c-.2 0-.52.08-.8.38-.28.3-1.06 1.03-1.06 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.75-.72 2-.41.25.3.25.89.18 1.14-.08.25-.3.87-.54 1.13-.24.25-.55.29-.9.37-.35.08-.8.08-1.29-.07-.28-.08-.63-.18-1.08-.32-.62-.27-1.33-.58-2.33-1.05-.89-.48-1.62-1.33-2.12-1.9l-.14-.18c-.29-.33-.59-.58-.95-.59-.35-.02-.78.15-1.2.46-.42.31-1.62 1.58-1.62 3.85 0 2.27 1.66 4.46 1.89 4.77.23.31 3.26 4.96 8.05 6.82 4.8 1.85 4.8 1.24 5.65 1.16.85-.08 2.74-1.12 3.13-2.2.39-1.08.39-2.01.27-2.2-.12-.19-.45-.31-.94-.54Z"
        fill={color}
      />
    </svg>
  )
}
