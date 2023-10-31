import { isImage, isPDF } from "app/helpers/extensions";
import { Attachment } from ".";
import Modal from "../Modal";

export type ViewAttachmentProps = {
  attachment: Attachment;
  open: boolean;
  onClose: () => void;
};

export default function ViewAttachment({
  attachment,
  open,
  onClose,
}: ViewAttachmentProps) {
  return (
    <Modal
      size="md"
      fullScreen={Boolean(attachment && isPDF(attachment))}
      heading={attachment?.fileName}
      open={open}
      onClose={onClose}>
      {attachment && (
        <div className="text-center m-auto">
          {isImage(attachment) && (
            <img
              src={attachment.url}
              className="max-w-full"
              alt={attachment.fileName}
            />
          )}
        </div>
      )}
    </Modal>
  );
}
