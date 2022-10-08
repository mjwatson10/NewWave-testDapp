import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "CapitalOffenseNFT",
  tokenName: "Capital Offense NFT",
  tokenSymbol: "CO",
  hiddenMetadataUri:
    "ipfs://QmahzTEWKb3QpoLq3SW9GneVaDBf1xpduZnwZWhtdL8AwL/1.png",
  maxSupply: 25,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.001,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x3c8E6a3CA33D35477529c32015e395C6C19F26e3",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
