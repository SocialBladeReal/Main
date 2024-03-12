const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "UCX6OQ3DkcsbYNE6H8uQQuVA";

setInterval(() => {
  fetch(`https://nia-statistics.com/api/get?platform=youtube&type=channel&id=${id}`).then((res) => res.json()).then((data) => {
                     document.getElementById("counter").innerHTML = data.estViewCount;

    document.getElementById("userimg").src = data.snippet.thumbnails[2].url;
    document.getElementById("userName").innerHTML = data.snippet.title;
                  });
      }, 2000);

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
function graphManager() {
    console.log(data.estSubCount)
    if (chart.series[0].points.length == 1500) chart.series[0].data[0].remove();
    chart.series[0].addPoint([Date.now(), data.estSubCount])
}
const Interface = new LivecountseditInterface()
window.onload = function () {
    if (document.getElementById('tabs.0')) document.getElementById('tabs.0').click();
}
function submit() {
    Interface.setValue()
}

function resetgraph() {

    chart = new Highcharts.chart({
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
            enabled: false,
        },
        credits: {
            enabled: true,
            text: "Livecountsedit"
        },
        series: [{
            showInLegend: false,
            name: 'Subscribers',
            marker: { enabled: false },
            color: '#000000',
            lineColor: "#b3382c"
        }]
    });

}

function random(min, max) {
    return Math.random() * (max - min) + min
}
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
        enabled: true,
        text: "Livecountsedit"
    },

    series: [{
        showInLegend: false,
        name: 'Subscribers',
        marker: { enabled: false },
        color: '#b3382c',
        lineColor: '#b3382c'
    }]
});
