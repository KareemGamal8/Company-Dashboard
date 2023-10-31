import { Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { MultiSelectInput, parseError, toastError } from "@mongez/moonlight";
import { HiddenInput } from "@mongez/react-form";
import { getModules } from "apps/admin/employees/services/modules-services";
import { useEffect, useMemo, useState } from "react";

export default function UserGroupsPermissions({ record }: any) {
  const [modules, setModules] = useState<any>([]);

  useEffect(() => {
    getModules()
      .then(response => {
        const formattedModules = Object.keys(response.data).map(moduleName => ({
          name: moduleName,
          permissions: response.data[moduleName],
        }));
        setModules(formattedModules);
      })
      .catch(error => {
        toastError(parseError(error.response.data.message));
      });
  }, []);

  const permissions = useMemo(() => {
    return modules.map((module, index) => {
      return (
        <div key={index}>
          <>
            <HiddenInput name={`modules.${index}.name`} value={module.name} />
            <Text>{module.name}</Text>
            <MultiSelectInput
              py={10}
              defaultValue={record.modules?.[module.name]}
              name={`modules.${index}.permissions`}
              data={module.permissions}
              placeholder={trans("permissions")}
              mapOption={item => ({
                label: trans(item),
                value: item,
              })}
            />
          </>
        </div>
      );
    });
  }, [modules, record]);

  return (
    <>
      <Text component="h2">{trans("permissions")}</Text>
      <div>{permissions}</div>
    </>
  );
}
