require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/QHD0fgbLLBYwayQLuKGXCZzQ9Z56hfha',
      accounts: ['e68bf48e1223db129758eef33db299f48af0029a547e0750bcb29eb8a95a5d54'],
    },
  },
};
