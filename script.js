// Air mileage data between major airports (in miles)
const airportDistances = {
    LAX: { JFK: 2475, ORD: 1744, DFW: 1235 },
    JFK: { LAX: 2475, ORD: 740, DFW: 1391 },
    ORD: { LAX: 1744, JFK: 740, DFW: 802 },
    DFW: { LAX: 1235, JFK: 1391, ORD: 802 }
};

document.getElementById('calculate-button').addEventListener('click', function () {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;

    if (departure === destination) {
        alert("Please select different departure and destination airports.");
        return;
    }

    const distance = airportDistances[departure][destination];
    document.getElementById('distance').innerText = distance;
    document.getElementById('result').style.display = 'block';
});
