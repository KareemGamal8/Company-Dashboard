import styled from "@emotion/styled";
import { Box } from "@mantine/core";

const Wrapper = styled(Box)`
  label: ChartsWrapper;
  border: 1px solid #f4f4f4;
  box-shadow: 0 5px 10px rgba(51, 66, 87, 0.05);
  border-radius: 10px;
` as any;

export const TableWrapper = styled(Wrapper)`
  label: TabWrapper;
  border: none;
  padding: 0.5rem;
  margin-top: 1rem;
` as any;

export const BranchesChartWrapper = styled<any>(Box)`
  label: BranchesChartWrapper;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const BranchesCheckInsSliderStyles = {
  control: {
    color: "#0B2A97",
    padding: "0.5rem",
    borderRadius: "30px",
    transition: "all 0.3s",
    border: "3px solid #0B2A97",
    svg: {
      width: "1rem !important",
      height: "1rem !important",
      stroke: "#0B2A97",
      strokeWidth: "0.1rem !important",
    },
    controls: {
      width: "100%",
    },
  },
};
