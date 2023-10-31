import { Attachment } from "../design-system/components/Attachments";

export const audiExtensions = ["mp3", "wav", "ogg"];
export const videoExtensions = [
  "mp4",
  "mkv",
  "avi",
  "wmv",
  "mov",
  "webm",
  "qt",
];

export const imagesExtensions = [];

export const acceptImagesOnly = "image/*";
export const acceptPDFOnly = "application/pdf";

export const acceptAudioExtensions = audiExtensions.map(
  extension => "audio/" + extension,
);

export const acceptVideoExtensions = videoExtensions.map(
  extension => "video/" + extension,
);

export const acceptMediaExtensions = [
  ...acceptAudioExtensions,
  ...acceptVideoExtensions,
];

const mimeTypes = [
  "image/apng",
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp",
];

export function isImage(attachment: Attachment): boolean {
  return mimeTypes.includes(attachment.mimeType);
}

export function isAudio(attachment: Attachment): boolean {
  return audiExtensions.includes(attachment.extension.toLocaleLowerCase());
}

export function isPDF(attachment: Attachment): boolean {
  return attachment.extension.toLocaleLowerCase() === "pdf";
}

export function isVideo(attachment: Attachment): boolean {
  return videoExtensions.includes(attachment.extension.toLocaleLowerCase());
}
