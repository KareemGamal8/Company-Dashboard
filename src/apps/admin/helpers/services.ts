import endpoint from "shared/endpoint";
import { Attachment } from "../design-system/components/Attachments";

export function uploadFiles(
  data: any,
  progressPercentageCallback?: (percentage: number) => void,
) {
  return endpoint.post("/uploads", data, {
    onUploadProgress(progressEvent) {
      if (!progressEvent.total) return;

      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total,
      );

      progressPercentageCallback?.(percentCompleted);
    },
  });
}

export function deleteUploadedFile(fileHash: string) {
  return endpoint.delete(`/uploads/${fileHash}`);
}

export function uploadFile(
  file: File,
  progressPercentageCallback?: (percentage: number) => void,
): Promise<Attachment> {
  const formData = new FormData();

  formData.append("uploads[]", file);

  return new Promise((resolve, reject) => {
    uploadFiles(formData, progressPercentageCallback)
      .then(response => {
        resolve(response.data.uploads[0]);
      })
      .catch(reject);
  });
}
