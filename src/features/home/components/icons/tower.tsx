interface TowerIconProps {
  variant?: "active" | "default";
}

export const TowerIcon = ({ variant = "default" }: TowerIconProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1333 26.3111V24.8889H10.3993L10.4 11.3778H8.97775C8.28441 11.3778 8.01419 10.4996 8.54397 10.102L8.61223 10.0572L15.7233 5.79058C15.8193 5.73298 15.9281 5.69885 16.0398 5.69102C16.1521 5.6832 16.2645 5.70169 16.3676 5.74578L16.4544 5.79058L23.5655 10.0572C24.1607 10.4135 23.9402 11.3052 23.281 11.3735L23.2 11.3778H21.7777L21.777 24.8889H26.0444V26.3111H6.1333ZM20.3548 24.8889L20.3555 11.3778H11.8222L11.8215 24.8889H13.2444V23.4667C13.2444 22.7243 13.5345 22.0117 14.0522 21.4805C14.5706 20.9493 15.2761 20.6414 16.0177 20.6229C16.7594 20.6044 17.4791 20.8768 18.0231 21.381C18.5671 21.8859 18.8928 22.5835 18.9297 23.3244L18.9333 23.4667V24.8889H20.3548ZM16.0889 22.0444C15.7297 22.0444 15.3841 22.1796 15.121 22.4235C14.8586 22.6681 14.6972 23.0023 14.6702 23.36L14.6666 23.4667V24.8889H17.5111V23.4667C17.5111 23.0898 17.361 22.7278 17.0944 22.4612C16.8277 22.1945 16.4657 22.0444 16.0889 22.0444ZM16.0889 14.2222C16.2773 14.2222 16.4586 14.2969 16.5916 14.4306C16.7253 14.5636 16.8 14.7449 16.8 14.9333C16.8 15.1218 16.7253 15.3031 16.5916 15.4361C16.4586 15.5698 16.2773 15.6444 16.0889 15.6444C15.9004 15.6444 15.7191 15.5698 15.5861 15.4361C15.4524 15.3031 15.3777 15.1218 15.3777 14.9333C15.3777 14.7449 15.4524 14.5636 15.5861 14.4306C15.7191 14.2969 15.9004 14.2222 16.0889 14.2222ZM16.0889 7.22916L11.5441 9.95556H20.6329L16.0889 7.22916Z"
      fill={variant === "default" ? "#78716C" : "#0B0A0A"}
    />
  </svg>
);
