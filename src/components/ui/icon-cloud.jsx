"use client";
import { useMemo } from "react";
import { Cloud } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function IconCloud({ iconSlugs = [] }) {
  const images = useMemo(
    () => iconSlugs.map((slug) => `https://cdn.simpleicons.org/${slug}/ffffff`),
    [iconSlugs]
  );

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>
        {images.map((src, index) => (
          <a key={index} href="#" onClick={(e) => e.preventDefault()}>
            <img height="42" width="42" alt={iconSlugs[index]} src={src} />
          </a>
        ))}
      </>
    </Cloud>
  );
}
