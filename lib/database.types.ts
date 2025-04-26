// lib/parseImages.ts
export function parseImages(images: any): string[] {
  if (!images) return [];

  if (Array.isArray(images)) {
    return images.map((url) => (typeof url === "string" ? url : "")).filter(Boolean);
  }

  if (typeof images === "string") {
    return images
      .replace("{", "")
      .replace("}", "")
      .split(",")
      .map((url) => url.trim())
      .filter(Boolean);
  }

  return [];
}
