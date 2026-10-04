import hiLogoAsset from "@/assets/human-in-logo-transparent.png.asset.json";

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
      className={className}
      width={1269}
      height={380}
    />
  );
}
