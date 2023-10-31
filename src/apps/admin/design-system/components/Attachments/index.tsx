export type Attachment = {
  id?: string | number;
  extension: string;
  url: string;
  fileName: string;
  mimeType: string;
  relativePath: string;
  hash: string;
  size: number;
};

export function humanSize(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}
