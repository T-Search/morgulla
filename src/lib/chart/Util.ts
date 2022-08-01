export const COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
];

export const percentageFormatter = (value, ctx) => {
    let sum = 0;
    let dataArr = ctx.chart.data.datasets[0].data;
    dataArr.map((data) => {
        sum += data;
    });
    let percentage = ((value * 100) / sum).toFixed(2) + '%';
    return percentage;
};