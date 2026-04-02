const http = require('http');
const { URL } = require('url');
const querystring = require('querystring');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const fullUrl = new URL(req.url, `/`);

    const pathname = fullUrl.pathname;

    const searchParams = fullUrl.searchParams;

    let queryObjFromURL = {};
    searchParams.forEach((value, key) => {
        queryObjFromURL[key] = value;
    });

    const parsedQuery = querystring.parse(fullUrl.search.replace('?', ''));

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
        pathname: pathname,
        query_from_url_class: queryObjFromURL,
        query_from_querystring: parsedQuery
    }, null, 2));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});