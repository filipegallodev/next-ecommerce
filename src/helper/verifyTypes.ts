export function isProduct(data: unknown): data is IProduct {
  if (data && typeof data === "object" && "title" in data) return true;

  return false;
}
