import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export function Logo({
  width = 720,
  height = 232,
  priority = false,
  className = "",
}: LogoProps) {
  return (
    <Image
      src="/logos/mithryl-light.png"
      alt="Mithryl Labs"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
