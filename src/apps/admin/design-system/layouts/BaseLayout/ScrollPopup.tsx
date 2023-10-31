import { Modal, ModalProps } from "@mantine/core";
import ScrollPaper from "./ScrollPaper";

export default function ScrollPopup({ children, ...props }: ModalProps) {
  return (
    <Modal
      closeOnClickOutside={false}
      size="lg"
      styles={{
        body: {
          padding: 0,
        },
        header: {
          display: "none",
        },
      }}
      {...props}>
      <ScrollPaper>{children}</ScrollPaper>
    </Modal>
  );
}

ScrollPopup.defaultProps = {
  closeOnEscape: false,
};
