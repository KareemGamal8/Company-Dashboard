import { Alert } from "@mantine/core";
import { trans } from "@mongez/localization";

export default function Error({ children }: any) {
  return (
    <div>
      <Alert>
        <strong style={{ textAlign: "center" }}>{children}</strong>
      </Alert>
    </div>
  );
}

Error.defaultProps = {
  children: <span>{trans("thereIsNoData")}</span>,
};
