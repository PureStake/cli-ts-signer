# test
# test add priv key: 0x9b241262661c9134509d986a131343d53dfd5844c3e76841bcd38e787ad19ebf
# test add pub key : 5CfvnCBDccniUVpKK49vdcS9Ev9XX3i3ejfVkLtXUxTYjA8z
# test recipient add : 5DReG2QBVE4Ygf7uHz9C4CbuktEnSzwJPmp3VyHoifs29VAa
npm run cli createAndSendTx -- --network relay --ws wss://westend-rpc.polkadot.io --address 5CfvnCBDccniUVpKK49vdcS9Ev9XX3i3ejfVkLtXUxTYjA8z  --tx balances.transfer --params "5DReG2QBVE4Ygf7uHz9C4CbuktEnSzwJPmp3VyHoifs29VAa,100000000000"