export interface BlobMaskOptions {
  viewBox?: string;
  transform?: string;
  fill?: string;
  preserveAspectRatio?: string;
}

export function svgMaskUrl(svg: string): string {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export function blobMaskUrl(
  path: string,
  options: BlobMaskOptions = {},
): string {
  const {
    viewBox = "0 0 200 200",
    transform,
    fill = "black",
    preserveAspectRatio,
  } = options;

  const transformAttr = transform ? ` transform="${transform}"` : "";
  const ratioAttr = preserveAspectRatio
    ? ` preserveAspectRatio="${preserveAspectRatio}"`
    : "";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"${ratioAttr}><path d="${path}"${transformAttr} fill="${fill}" /></svg>`;

  return svgMaskUrl(svg);
}
