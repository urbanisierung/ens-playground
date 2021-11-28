import ENS, { getEnsAddress } from '@ensdomains/ensjs'
import Web3 from 'web3'

async function main(name: string) {
  const infura = process.env.INFURA
  const provider = new Web3.providers.HttpProvider(infura)
  const ens = new ENS({ provider, ensAddress: getEnsAddress('1') })

  const address = await ens.name(name).getAddress() // 0x123
  console.log(`address of ${name} is ${address}`)
}

// main(`resolver.eth`)
main(`urbanisierung.eth`)
