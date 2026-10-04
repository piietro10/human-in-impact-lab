import hiLogoAsset from "@/assets/human-in-logo-transparent.png.asset.json";
import { cn } from "@/lib/utils";

type HiLogoProps = {
  className?: string;
};

/**
 * Official Human In logo with symbol, name and brand pillars.
 */
export function HiLogo({ className }: HiLogoProps) {
  return (
    <img
      src={hiLogoAsset.url}
      alt="Logomarca Human In"
      className={cn("rounded-sm bg-paper object-contain px-1", className)}
      width={1269}
      height={380}
    />
  );
}
