import { Transaction, users } from "@/constants/FinanceData";
import {
    VictoryPie,
    VictoryTheme,
    VictoryChart,
    VictoryStack,
    VictoryBar,
    VictoryAxis,
    VictoryLegend,
} from "victory";
import { StyleSheet } from "react-native";
import { min, range } from "lodash";
import dayjs from 'dayjs'

export default function Dashboard() {
    let date = "2024-10-01";
    let time = "19:00";
    let transactionsToDisplay: Transaction[] = users[0].transactions;

    let minYear = 3000;
    let maxYear = 0;

    // Pie chart

    let totalCategoricalDict: any = {};
    let totalCategoricalList: { x: string; y: number }[] = [];

    for (let transaction of transactionsToDisplay) {
        let category = transaction.category;
        let amount = transaction.amount;

        if (category in totalCategoricalDict === false) {
            totalCategoricalDict[category] = 0;
        }
        totalCategoricalDict[category] += amount;
    }

    for (let category in totalCategoricalDict) {
        totalCategoricalList.push({
            x: category,
            y: totalCategoricalDict[category],
        });
    }

    // Stacked bar chart

    let totalYearlyCategoricalDict: any = {};
    let totalYearlyCategoricalList: { x: number; y: number }[][] = [];

    for (let transaction of transactionsToDisplay) {
        let category = transaction.category;
        let year = dayjs(transaction.date).year();
        minYear = Math.min(minYear, year);
        maxYear = Math.max(maxYear, year);
        let amount = transaction.amount;

        if (category in totalYearlyCategoricalDict === false) {
            totalYearlyCategoricalDict[category] = {};
        }
        if (year in totalYearlyCategoricalDict[category] === false) {
            totalYearlyCategoricalDict[category][year] = 0;
        }
        totalYearlyCategoricalDict[category][year] += amount;
    }

    console.log(totalYearlyCategoricalDict);

    for (let category in totalYearlyCategoricalDict) {
        let categoricalYearlyAmount = [];
        for (let year in totalYearlyCategoricalDict[category]) {
            let yearNum = parseInt(year);
            let categoryAmount = totalYearlyCategoricalDict[category][yearNum];
            categoricalYearlyAmount.push({ x: yearNum, y: categoryAmount });
        }
        categoricalYearlyAmount.sort((a, b) => a.x - b.x);
        totalYearlyCategoricalList.push(categoricalYearlyAmount);
    }

    // console.log(totalYearlyCategoricalList);

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                background: "white",
            }}
        >
            <div style={{ flex: 1 }}>
                <VictoryPie
                    padding={0}
                    cornerRadius={6}
                    innerRadius={40}
                    padAngle={1}
                    data={totalCategoricalList}
                    theme={VictoryTheme.clean}
                    labelRadius={180}
                    style={{ labels: { fontSize: 20 } }}
                />
            </div>
            <div style={{ flex: 2 }}>
                <VictoryChart
                    padding={40}
                    theme={VictoryTheme.clean}
                    domainPadding={20}
                    style={{ parent: { maxWidth: "100%" } }}
                >
                    <VictoryAxis
                        tickValues={range(minYear, maxYear + 1)}
                        style={{
                            tickLabels: { angle: 45, fontSize: 6 },
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            tickLabels: { fontSize: 8 },
                            grid: { stroke: "#d9d9d9", strokeWidth: 1 },
                        }}
                        tickCount={8}
                    />
                    <VictoryStack>
                        {totalYearlyCategoricalList.map((x, i) => {
                            console.log(x);
                            return (
                                <VictoryBar
                                    key={i}
                                    data={x}
                                    barRatio={0.4}
                                    style={{
                                        data: { strokeWidth: 0.1 },
                                    }}
                                    cornerRadius={0}
                                />
                            );
                        })}
                    </VictoryStack>
                    <VictoryLegend
                        borderPadding={0}
                        borderComponent={<br />}
                        x={110}
                        y={20}
                        height={0}
                        style={{
                            parent: { fill: "red" },
                            labels: { fontSize: 8 },
                            data: { background: "red"}
                        }}
                        scale={{ x: "linear", y: "linear" }}
                        orientation="horizontal"
                        data={Object.keys(totalYearlyCategoricalDict).map(
                            (s, i) => ({ name: s })
                        )}
                    />
                </VictoryChart>
            </div>
        </div>
    );
}
