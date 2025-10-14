// 1
function coinFlip() {
    return new Promise((resolve, reject) => {
        const flip = Math.random();
        if (flip < 0.5) {
            resolve("Heads");
        } else {
            reject("Tails");
        }
    });
}

// 2
const stringPromise = new Promise((resolve, reject) => {
    const strings = ["apple", "banana", "kiwi", "pear", "grape"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    const selected = strings[randomIndex];

    console.log("Selected string:", selected);

    if (selected.length % 2 === 0) {
        resolve("success");
    } else {
        reject("failure");
    }
});

function successHandler(message) {
    console.log("Resolved:", message);
}

function failureHandler(message) {
    console.log("Rejected:", message);
}

stringPromise.then(successHandler, failureHandler);
