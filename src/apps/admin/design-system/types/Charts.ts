import { ChartDataset, ChartOptions, ChartType } from "chart.js";

export type ChartProps = {
  /**
   * Group of strings to declare chart type..
   * Examples :
   * "bar" | "pie " ..etc
   */
  type: ChartType;
  /**
   * The data object that is passed into the Chart.js chart
   */
  data: {
    /**
     * Labels are array of strings that contain any information words..
     */
    labels: string[];
    /**
     * datasets array of some options
     */
    datasets: ChartDataset[];
  };
  /**
   * Width of chart
   */
  width?: number | string | undefined;
  /**
   * Height of chart
   */
  height?: number | string | undefined;
  /**
   * Object that is passed into the chart, Control of chart,
   */
  options?: ChartOptions;
};
