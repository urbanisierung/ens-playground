import ENS, { getEnsAddress } from '@ensdomains/ensjs'
import Web3 from 'web3'

let ens

async function main(name: string) {
  const infura = process.env.INFURA
  const provider = new Web3.providers.HttpProvider(infura)
  ens = new ENS({ provider, ensAddress: getEnsAddress('1') })

  const address = await ens.name(name).getAddress() // 0x123
  console.log(`address of ${name} is ${address}`)

  await printText(name, `url`)
  await printText(name, `email`)
}

async function printText(name: string, type: string) {
  const data = await ens.name(name).getText(type)
  console.log(`${type}: ${data}`)
}

// main(`resolver.eth`)
main(`urbanisierung.eth`)
