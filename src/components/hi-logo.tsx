import hiLogoImg from "@/assets/hi-logo.png";

type HiLogoProps = {
  className?: string;
};

/**
 * Human In brand mark — the official logo, cropped from the brand sheet
 * (black rounded square, white "hi", blue dot on the "i").
 */
export function HiLogo({ className }: HiLogoProps) {
  return (
    <img
      src={hiLogoImg}
      alt="Logomarca Human In"
      className={className}
      width={512}
      height={512}
    />
  );
}
