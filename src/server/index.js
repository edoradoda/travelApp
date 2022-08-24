
const app = require("./app");



// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8081, function () {
    console.log('Example app listening on port 8081!')
})












