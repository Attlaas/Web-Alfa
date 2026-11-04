import * as React from "react"

// Imagen simple y ligera: las imágenes viven en public/img y se sirven tal cual.
const Image = React.forwardRef(({ className, style, ...props }, ref) => (
  <img
    ref={ref}
    loading="lazy"
    decoding="async"
    className={className}
    style={{ objectFit: "cover", ...style }}
    {...props}
  />
))
Image.displayName = "Image"

export { Image }
