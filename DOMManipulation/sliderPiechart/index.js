const pieChart = document.querySelector(".pieChart");
const inputHandler = document.querySelector("#inputHandler");

inputHandler.addEventListener("input", cb);

function cb(e) {
    pieChart.style = `--percentage: ${e.target.value}%`;
}