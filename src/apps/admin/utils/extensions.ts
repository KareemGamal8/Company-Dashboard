export function isImageExtension(extension: string) {
  return ["jpg", "jpeg", "png", "gif", "svg", "webp", "bmp", "ico"].includes(
    extension.toLocaleLowerCase(),
  );
}
