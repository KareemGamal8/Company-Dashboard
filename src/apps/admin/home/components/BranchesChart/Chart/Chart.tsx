import { Flex, Title, useMantineColorScheme } from "@mantine/core";
import { trans } from "@mongez/localization";
import { preload } from "@mongez/react-utils";
import { getActiveEmployees } from "apps/admin/home/services/home-service";
import ReactApexChart from "react-apexcharts";

function _Chart({ response }: any) {
  const labels = response.data.labels;
  const values = response.data.values;

  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  if (!labels || !values) {
    return null;
  }

  const series = [{ name: trans("employees"), data: values || [] }];

  const options: any = {
    chart: {
      zoom: {
        enabled: false,
      },
    },

    theme: {
      mode: isDark ? "dark" : "light",
    },
    stroke: {
      width: [8],
      curve: "smooth",
    },
    legend: {
      show: false,
      tooltipHoverFormatter: function (val: any, opts: any) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
      markers: {
        width: 14,
        height: 14,
        strokeWidth: 0,
        radius: 19,
      },
    },
    markers: {
      size: 0,
      strokeWidth: 4,
      border: 0,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      offsetX: 0,
      labels: {
        style: {
          fontSize: "1rem",
          fontFamily: "Poppins",
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: value => {
          return `${value}`;
        },
        style: {
          fontSize: "16px",
          fontFamily: "Poppins",
          fontWeight: 600,
        },
      },
    },
    fill: {
      type: "solid",
    },
    colors: ["#0B2A97"],
    responsive: [
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  };

  return (
    <Flex direction="column" gap="1rem" p="1rem">
      <Title order={3} m={0} fw={700}>
        {trans("activeEmployees")}
      </Title>

      <div
        id="chart"
        style={{
          padding: "1rem 0",
        }}>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          width="100%"
          height={350}
        />
      </div>
    </Flex>
  );
}

const Chart = preload(_Chart, getActiveEmployees);
export default Chart;
