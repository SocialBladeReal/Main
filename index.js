const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "UCX6OQ3DkcsbYNE6H8uQQuVA";
var textBright = "#bdbdbd"
var lineColor = "#000000"
var maxPoints = 20000;
var chart = new Highcharts.chart({
    chart: {
        renderTo: 'chart',
        type: 'spline',
        zoomType: 'x',
        backgroundColor: 'transparent',
        plotBorderColor: 'transparent'
    },
    title: {
        text: ' '
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 500,
        gridLineColor: textBright,
        labels: {
            style: {
                color: textBright
            }
        },
        lineColor: lineColor,
        minorGridLineColor: '#bdbdbd',
        tickColor: lineColor,
        title: {
            style: {
                color: textBright
            }
        }
    },
    yAxis: {
        visible: false,
    },
    credits: {
        enabled: false,
    },

    series: [{
        showInLegend: false,
        name: 'Subscribers',
        marker: { enabled: false },
        color: '#b3382c',
        lineColor: '#b3382c'
    }]
});

setInterval(() => {
  fetch(`https://nia-statistics.com/api/get?platform=youtube&type=channel&id=${id}`).then((res) => res.json()).then((data) => {
                     document.getElementById("counter").innerHTML = data.estSubCount;

    document.getElementById("userimg").src = data.snippet.thumbnails.high.url;
    document.getElementById("userName").innerHTML = data.snippet.title;
    if (chart.series[0].points.length == 1500) chart.series[0].data[0].remove();
    chart.series[0].addPoint([Date.now(), data.estSubCount])
                  });
      }, 2000);

document.getElementById(
  "subscribeBtn"
).href = `https://youtube.com/channel/${id}?sub_confirmation=1`;

function search() {
  const prompt = window.prompt("Enter channel name, ID, or URL.");
  if (prompt)
    fetch(
      `https://axern.space/api/search?platform=youtube&type=channel&query=${prompt}`
    )
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "?id=" + data[0].id;
      });
}
