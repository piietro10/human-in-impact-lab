import hiLogoImg from "@/assets/hi-logo.png";
import { cn } from "@/lib/utils";

type HiLogoProps = {
  className?: string;
};

/**
 * Official cropped Human In symbol.
 */
export function HiLogo({ className }: HiLogoProps) {
  return (
    <img
      src={hiLogoImg}
      alt="Símbolo Human In"
      className={cn("object-contain", className)}
      width={512}
      height={512}
    />
  );
}
