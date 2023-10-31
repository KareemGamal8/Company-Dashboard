import { BasicComponentProps } from "app/utils/types";
import Root from "../Root";

export default function BaseLayout({ children }: BasicComponentProps) {
  return <Root>{children}</Root>;
}
