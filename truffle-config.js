module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
        host: "127.0.0.1", // Localhost (default: none)
        port: 8545, // Standard Ethereum port (default: none)
        network_id: "*" // Any network (default: none)
    },

      kovan: {
          provider: () =>
          new HDWalletProvider(
              mnemonic,
              `https://kovan.infura.io/v3/` + infuraKey
          ),
          network_id: 42, // Ropsten's id
          gas: 5512481, // Ropsten has a lower block limit than mainnet
          confirmations: 1, // # of confs to wait between deployments. (default: 0)
          gasPrice: "10000000000",
          timeoutBlocks: 200 // # of blocks before a deployment times out  (minimum/default: 50)
          //skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
      },
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
