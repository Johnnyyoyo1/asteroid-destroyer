//header common content
function header() {
    with (document) {
        write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"'
            + 'crossorigin="anonymous">')
        write('<link rel="stylesheet" href="style.css">');
        write('<meta charset="UTF-8">');
        write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        write('<title>This is my page</title>');
        write('<style>.gridbg { opacity: 20%; z-index: -1; position: fixed; bottom: 0; }</style>');
    }
}
//body common content
function body() {
    with (document) {
        write('<div id="icon-pattern"></div>');
    }
}
//footer
function footer() {
    with (document) {
        write('<footer>')
        write('<img class="gridbg" loading="lazy" draggable="false" src="asset/grid.png" width="100%">')
        write('<p style="font-family:TERMINAL ;margin-top: 100px; text-align: center;">&copy; 2025 Johnnyyoyo1. All rights reserved.</p>')
        write('</footer>')
    }
}