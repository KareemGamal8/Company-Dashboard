import { CheckCircleFillIcon, CloseFileIcon } from "../Icons";

export type BooleanValueProps = {
  value: boolean;
};

export default function BooleanValue({ value }: BooleanValueProps) {
  if (value) {
    return <CheckCircleFillIcon className="text-primary fs-22" />;
  } else {
    return <CloseFileIcon className="text-danger fs-22" />;
  }
}
