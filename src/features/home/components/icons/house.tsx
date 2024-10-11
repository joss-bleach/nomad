interface HouseIconProps {
  variant?: "active" | "default";
}

export const HouseIcon = ({ variant = "default" }: HouseIconProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1769 6.24426L17.3013 6.36088L26.597 15.493L25.6 16.507L24.32 15.2498L24.3207 24.8889C24.3207 25.6384 23.7404 26.2528 23.0044 26.3068L22.8985 26.3111H8.67627C7.92676 26.3111 7.31236 25.7308 7.25761 24.9948L7.25405 24.8889L7.25334 15.2505L5.97476 16.507L4.97778 15.493L14.2635 6.37013C15.0549 5.56231 16.3314 5.51751 17.1769 6.24426ZM15.338 7.31377L15.2697 7.37564L8.67556 13.8532L8.67627 24.8889L12.2311 24.8882L12.2318 17.7778C12.2318 17.0283 12.8121 16.4139 13.5481 16.3591L13.654 16.3556H17.9207C18.6702 16.3556 19.2846 16.9358 19.3394 17.6718L19.3429 17.7778L19.3422 24.8882L22.8985 24.8889L22.8978 13.8524L16.2852 7.35573C16.0263 7.10186 15.6224 7.08622 15.338 7.31377ZM17.9207 17.7778H13.654L13.6533 24.8882H17.92L17.9207 17.7778Z"
      fill={variant === "default" ? "#78716C" : "#0B0A0A"}
    />
  </svg>
);
