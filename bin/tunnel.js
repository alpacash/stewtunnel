const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 80, host: "http://tunnel.stew.sh" });

  console.log(`\nTunnel is open! Your url is ${tunnel.url}`);

  tunnel.on('close', () => {
    console.log("Tunnels are closed...");
  });
})();
