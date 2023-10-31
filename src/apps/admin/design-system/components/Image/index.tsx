import React from "react";

export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  size?: "xss" | "sm" | "xs" | "md" | "lg" | "xl";
};

export function CircleImage({ alt, ...props }: any) {
  return <img {...props} alt={alt} />;
}

CircleImage.defaultProps = {
  size: "sm",
};

export default function Image({ alt, ...props }: any) {
  return <img {...props} alt={alt} />;
}

Image.defaultProps = {
  size: "sm",
};
