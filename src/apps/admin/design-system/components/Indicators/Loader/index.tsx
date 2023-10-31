import { Loader as BaseLoader } from "@mantine/core";
import { LoaderProps } from "./types";

export default function Loader({ isLoading = true, ...props }: LoaderProps) {
  if (!isLoading) return null;
  return <BaseLoader {...props} />;
}
