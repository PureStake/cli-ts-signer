// import { Argv } from "yargs";
// import { VoteCouncilArgs } from "../methods/types";
// import { exit } from "../methods/utils";
// import { ALITH, authorizedChains } from "../methods/utils";
// import { voteCouncilPrompt } from "../methods/voteCouncil";

// export const specificTxOptions = {
//   network: {
//     describe: "the network on which you want to send the tx",
//     type: "string" as "string",
//     default: "moonbase",
//     choices: authorizedChains,
//     demandOption: true,
//   },
//   ws: {
//     describe: "websocket address of the endpoint on which to connect",
//     type: "string" as "string",
//     default: "wss://wss.testnet.moonbeam.network",
//     demandOption: true,
//   },
//   address: {
//     describe: "address of the sender",
//     type: "string" as "string",
//     default: ALITH,
//     demandOption: true,
//   },
// };

// export const voteCouncilCommand = {
//   command: "voteCouncil",
//   describe: "creates a vote council payload, prompts for signature and sends it",
//   builder: (yargs: Argv) => {
//     return yargs.options(specificTxOptions);
//   },
//   handler: async (argv: VoteCouncilArgs) => {
//     await voteCouncilPrompt(argv.address, { ws: argv.ws, network: argv.network });
//     exit();
//   },
// };
