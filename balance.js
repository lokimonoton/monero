var CoinHive = require('coin-hive');
(async () => {

  // Create miner
  var miner = await CoinHive('QJwS2XwhTx6j6i8HvVJ4H3nwqQlsQ8Bx'); // Coin-Hive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => {console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}

  `);
  if(data.acceptedHashes==256){
      miner.kill()
    }

  }
  );

  // Stop miner
  // setTimeout(async () =>{ await miner.kill();
  // }
  // , 60000);
})();