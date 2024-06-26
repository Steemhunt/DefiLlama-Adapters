const { sumTokensExport} = require('../helper/sumTokens')

const contractAddresses = [
  'osmo1rk4hregdr63rlqqj0k2rjzk6kz7w6v6tw8f5fqx2wg8203eam5equ67tdl',
  'osmo1zttzenjrnfr8tgrsfyu8kw0eshd8mas7yky43jjtactkhvmtkg2qz769y2',
]

module.exports = {
  methodology: 'Total collateral held on power perpetual contracts',
  osmosis: {
    tvl: sumTokensExport({ owners: contractAddresses}),
  },
   hallmarks:[
    [Math.floor(new Date('2022-11-06') / 1e3), 'sqOSMO contract deployed'],
    [Math.floor(new Date('2023-11-21') / 1e3), 'sqATOM contract deployed'],
  ]
}
