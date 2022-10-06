export const COLORS = ["#fd5da8", "#ff5800", "#dffe00", "#98ff98", "#42e0d1", "#007fff", "#9370db", "#613385", "#8b008b", '#c46210', '#e27c7c', '#e1a692'];

export const percentageFormatter = (value, ctx) => {
    let sum = 0;
    let dataArr = ctx.chart.data.datasets[0].data;
    dataArr.map((data) => {
        sum += data;
    });
    let percentage = ((value * 100) / sum).toFixed(2) + '%';
    return percentage;
};