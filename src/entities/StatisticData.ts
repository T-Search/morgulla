export interface StatisticData {
    boxStatistics: BoxStatistics;
    highlightsPerMonth: ChartData;
    highlightsPerWeekday: ChartData;
    clipsPerMonth: ChartData;
    clipsPerHour: ChartData;
    clipsPerGame: ChartData;
    clipperPerCount: ChartData;
    clipperPerViews: ChartData;
    calculatedAt: Date;
}

export interface BoxStatistics {
    highlights: number;
    highlightsLast30Days: number;
    clips: number;
    clipsLast30Days: number;
    games: number;
}

export interface ChartData {
    labels: string[];
    datasets: Dataset[];
}

export interface Dataset {
    name: string;
    data: number[];
}
