function getRandomDelay() {
    return Math.floor(Math.random() * 1500) + 500;
}

function shouldFail() {
    return Math.random() < 0.5;
}

const getPlanetData = new Promise((resolve, reject) => {
    const delay = getRandomDelay();
    setTimeout(() => {
        if (!shouldFail()) {
            resolve({
                name: "Mars",
                size: "6,779 km",
                distanceFromSun: "227.9 million km"
            });
        } else {
            reject("Planet data fetch failed.");
        }
    }, delay);
});

const getSatelliteData = new Promise((resolve, reject) => {
    const delay = getRandomDelay();
    setTimeout(() => {
        if (!shouldFail()) {
            resolve({
                moons: 2
            });
        } else {
            reject("Satellite data fetch failed.");
        }
    }, delay);
});

const getExplorationData = new Promise((resolve, reject) => {
    const delay = getRandomDelay();
    setTimeout(() => {
        if (!shouldFail()) {
            resolve({
                missions: ["Viking 1", "Curiosity", "Perseverance"]
            });
        } else {
            reject("Exploration data fetch failed.");
        }
    }, delay);
});

getPlanetData
    .then(data => console.log("Planet data received:", data))
    .catch(error => console.error("nope", error));

getSatelliteData
    .then(data => console.log("Satellite data received:", data))
    .catch(error => console.error("nope", error));

getExplorationData
    .then(data => console.log("Exploration data received:", data))
    .catch(error => console.error("nope", error));

Promise.all([getPlanetData, getSatelliteData, getExplorationData])
    .then(([planet, satellite, exploration]) => {
        const report = {
            ...planet,
            ...satellite,
            ...exploration
        };
        console.log("Combined Planet Report:");
        console.log(report);
    })
    .catch(error => {
        console.log("Could not generate full Planet Report:");
        console.error("Reason:", error);
    });
