"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type LogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export function Logo({
  width = 280,
  height = 96,
  priority = false,
  className = "",
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On dark mode, show the light/regular (transparent) logo.
  // On light mode, show the dark logo.
  const src =
    mounted && resolvedTheme === "dark"
      ? "/logos/mithryl-light.png"
      : "/logos/mithryl-dark.png";

  return (
    <Image
      src={src}
      alt="Mithryl Labs"
      width={width}
      height={height}
      priority={priority}
      className={className}
      suppressHydrationWarning
    />
  );
}
