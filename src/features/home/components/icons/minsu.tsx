interface MinsuIconProps {
  variant?: "active" | "default";
}

export const MinsuIcon = ({ variant = "default" }: MinsuIconProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.53707 6.04445C7.53707 6.79396 8.11663 7.40836 8.85263 7.46312L8.9593 7.46667H23.1815C23.931 7.46667 24.5447 6.8864 24.5995 6.1504L24.6037 6.04445H26.026C26.026 7.21138 25.3227 8.21476 24.3172 8.6528L26.9995 12.9458C27.3117 13.4457 27.1602 14.1035 26.661 14.4156C26.5252 14.5003 26.373 14.5536 26.2151 14.5714L26.0949 14.5778H26.026V24.5333C26.026 25.2828 25.4457 25.8972 24.7097 25.9513L24.6037 25.9556H7.53707C6.78756 25.9556 6.17316 25.3753 6.11841 24.6393L6.11485 24.5333V14.5778H6.04445C5.45565 14.5778 4.97778 14.0999 4.97778 13.5111C4.97778 13.3511 5.01405 13.194 5.08232 13.0503L5.14063 12.9458L7.82365 8.65352C6.85867 8.23254 6.17245 7.29245 6.11841 6.18667L6.11485 6.04445H7.53707ZM12.5134 21.6889H7.53565L7.53707 24.5333H12.5134V21.6889ZM18.2037 18.1333H13.9371L13.9357 24.5333H18.2023L18.2037 18.1333ZM19.6245 24.5333H24.6037L24.6023 21.6889H19.6245V24.5333ZM24.6037 14.5778H7.53707L7.53565 20.2667H12.5134L12.5149 18.1333C12.5149 17.3838 13.0944 16.7694 13.8304 16.7147L13.9371 16.7111H18.2037C18.9533 16.7111 19.5669 17.2914 19.6217 18.0274L19.626 18.1333L19.6245 20.2667H24.6023L24.6037 14.5778ZM22.7869 8.88889H9.35183L6.68516 13.1556H25.4535L22.7869 8.88889Z"
      fill={variant === "default" ? "#78716C" : "#0B0A0A"}
    />
  </svg>
);
