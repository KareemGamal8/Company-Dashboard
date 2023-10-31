import { Chart as Chartjs, registerables } from "chart.js";
import { ChartProps } from "design-system/types/Charts";
import { useEffect } from "react";

Chartjs.register(...registerables);

/**
 * Example of usage : 
 *  type="Your Type"
 *  height={Number}
        data={{
          Your data, this is jus an example, you can show more data in :
          @https://www.chartjs.org/docs/latest/general/data-structures.html,

          labels: ["Red", "Blue"],
          datasets: [
            {
              label: "Label",
              data: [12, 19],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
              ],
            },
          ],
        }}
        You can find more options in :
        @https://www.chartjs.org/docs/latest/general/options.html,

        options={{ Your chart options... }}
 */
export default function Chart({
  data,
  options,
  type,
  ...otherProps
}: ChartProps) {
  useEffect(() => {
    const canvas = document.getElementById("chart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    new Chartjs(ctx, {
      type: type,
      data: { ...data },
      options: { ...options },
    });
  }, [type, data, options]);
  return <canvas id="chart" width="400" height="400" {...otherProps}></canvas>;
}
