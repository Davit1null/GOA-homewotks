process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    const cleaned = data.trim().toUpperCase();
    console.log("formatted:", cleaned);
});