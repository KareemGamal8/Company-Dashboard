import { trans } from "@mongez/localization";
import { MultiSelectInput } from "@mongez/moonlight";
import { HiddenInput } from "@mongez/react-form";
import { useState } from "react";

export default function UsersPermissions({ defaultValue }: any) {
  const [modules] = useState([defaultValue]);

  return (
    <>
      {modules.map((module, index) => {
        return (
          <>
            <HiddenInput name={`modules.${index}.name`} value={module} />
            <MultiSelectInput
              py={10}
              name={`modules.${index}.permissions`}
              data={["read", "add", "update", "delete"]}
              placeholder={trans("value")}
            />
          </>
        );
      })}
    </>
  );
}
