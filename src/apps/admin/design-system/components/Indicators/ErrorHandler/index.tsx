import { parseError } from "@mongez/moonlight";
import React from "react";
import Error from "../../Error";
import { ErrorHandlerProps } from "./types";

export default function ErrorHandler({ error }: ErrorHandlerProps) {
  const errorContent = React.useMemo(
    () => parseError(error.response?.data.message),
    [error],
  );

  if (!errorContent) return null;

  return (
    <>
      <Error>{errorContent}</Error>
    </>
  );
}
