export function parseImages(images: any): string[] {
    if (!images) return [];
  
    if (Array.isArray(images)) {
      return images.map((url) =>
        typeof url === "string"
          ? url.replace(/([^:]\/)\/+/g, "$1") // 👈 REGLA para quitar doble slash
          : ""
      ).filter(Boolean);
    }
  
    if (typeof images === "string") {
      return images
        .replace("{", "")
        .replace("}", "")
        .split(",")
        .map((url) => url.trim().replace(/([^:]\/)\/+/g, "$1")) // 👈 AQUÍ TAMBIÉN
        .filter(Boolean);
    }
  
    return [];
  }
  