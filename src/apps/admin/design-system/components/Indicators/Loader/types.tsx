import { LoaderProps as BaseLoaderProps } from "@mantine/core";

export type LoaderProps = BaseLoaderProps & {
  /**
   * Determine whether to display the loader component
   *
   * @default true
   */
  isLoading?: boolean;
};
