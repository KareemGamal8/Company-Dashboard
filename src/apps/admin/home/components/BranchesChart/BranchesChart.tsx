import { Flex, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { trans } from "@mongez/localization";
import { SelectInput } from "@mongez/moonlight";
import { homeAtom } from "apps/admin/home/atom/home-atom";
import { BranchName } from "apps/admin/home/types";
import { useEffect, useState } from "react";
import Chart from "./Chart";

export default function BranchesComponent() {
  const branches = homeAtom.use("branches");

  const [branchName, setBranchName] = useState<string>("");
  const [branchChart, setBranchChart] = useState<BranchName | null>(null);

  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const isMobile = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    setBranchName(branches[0].branch_name);
    setBranchChart(branches[0]);
  }, [branches]);

  const handleBranchChange = (value: string) => {
    const selectedBranch = branches.find(
      branch => branch.branch_name === value,
    );
    if (selectedBranch) {
      setBranchName(value);
      setBranchChart(selectedBranch);
    }
  };

  return (
    <Flex direction="column" gap="1rem" justify="flex-start">
      <Flex justify="space-between" align="center">
        {!isMobile && (
          <Flex direction="column" gap="0.2rem">
            <Title order={3} m={0} fw={700}>
              {trans("branch")} {branchName}
            </Title>
            <Text component="p" m={0}>
              {trans("monthlyIncomeStatisticsTo")} : {branchName}
            </Text>
          </Flex>
        )}
        <SelectInput
          placeholder="Branches"
          name="branch"
          defaultValue={branches[0].branch_name}
          clearable={false}
          data={branches.map(branch => branch.branch_name)}
          transitionProps={{
            transition: "pop-top-left",
            duration: 300,
            timingFunction: "ease",
          }}
          onChange={handleBranchChange}
          styles={{
            input: {
              fontWeight: 600,
              width: "10rem",
              border: "none",
              borderRadius: "0.5rem",
              background: isDark ? "" : "#f4f4fa",
            },
          }}
        />
      </Flex>

      <Chart branchChart={branchChart} />
    </Flex>
  );
}
