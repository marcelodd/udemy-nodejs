var http = require('http');

var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url == '/tecnologia') {
        res.end('<html><body>Portal de notícias Tecnologia</body></html>');
    } else if (url == '/moda') {
        res.end('<html><body>Portal de notícias Moda</body></html>');
    } else {
        res.end('<html><body>Portal de notícias</body></html>');
    }
});

server.listen(3000);