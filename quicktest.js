require("dotenv").config();

const PlexAPI = require('./lib/api');

const plexClient = new PlexAPI({
    // localhost autoconnect
    username: process.env.PLEX_USERNAME,
    password: process.env.PLEX_PASSWORD,
    hostname: "localhost"
});

plexClient.query("/").then(function (result) {
    console.log(JSON.stringify(result,null,4));
	console.log("%s running Plex Media Server v%s",
		result.friendlyName,
		result.version);

	// array of children, such as Directory or Server items
	// will have the .uri-property attached
	console.log(result._children);
}, function (err) {
	console.error("Could not connect to server", err);
});