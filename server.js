const express = require('express')
const app = express()

app.use( express.static('public', {
    // Express.js does this for you
    setHeaders: (res, path, start) => {
        // set correct mime type for wasm
        if ( path.endsWith('.wasm')) {
            res.set('Content-Type', 'application/wasm')
        }
    }
}))

app.listen(8888, () => console.log('Server running on port 8888'))
