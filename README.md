# NEAR Javascript Enclave

- Playing with the NEAR JS SDK followin this tutorial: https://docs.near.org/develop/enclave

## Build and deploy

```sh
# build
npm run build

# deploy
npm run deploy
```

## Interacting with the smart contract

```sh
# interacting
export JS_CONTRACT="..."

# initialize
near js call $JS_CONTRACT init --accountId $JS_CONTRACT --deposit 0.1

# get greetings
near js view $JS_CONTRACT get_greeting

# set greetings
near js call $JS_CONTRACT set_greeting '["GO TEAM!"]' --accountId $JS_CONTRACT --deposit 0.1
```
