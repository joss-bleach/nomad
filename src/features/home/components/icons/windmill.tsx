interface WindmillIconProps {
  variant?: "active" | "default";
}

export const WindmillIcon = ({ variant = "default" }: WindmillIconProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.40002 28.4423H26.3111"
      stroke={variant === "default" ? "#78716C" : "#0B0A0A"}
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M10.5778 28.1154L13.6419 15.6445"
      stroke={variant === "default" ? "#78716C" : "#0B0A0A"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.8545 28.2752L18.7917 15.7263L18.8036 15.7748"
      stroke={variant === "default" ? "#78716C" : "#0B0A0A"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.4353 24.5234H20.7203"
      stroke={variant === "default" ? "#78716C" : "#0B0A0A"}
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M22.5245 6.27911L20.512 4.26667L16.1963 8.5824L11.8791 4.26667L9.8667 6.27911L14.1824 10.5948L9.8667 14.912L11.8791 16.9244L16.1963 12.6073L20.512 16.9244L22.5245 14.912L18.2087 10.5948L22.5245 6.27911Z"
      stroke={variant === "default" ? "#78716C" : "#0B0A0A"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
