import { hexToU8a, stringToU8a, u8aToHex } from "@polkadot/util";
import { Keyring } from "@polkadot/keyring";
import type { KeyringPair } from "@polkadot/keyring/types";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import prompts from "prompts";
import { NetworkType } from "./types";

// TODO display payload content
export async function sign(
  type: NetworkType,
  privKey: string,
  prompt: boolean,
  message?: string
):Promise<string> {
  if (!["ethereum", "sr25519"].includes(type)) {
    throw new Error("Type is not supported");
  }
  await cryptoWaitReady();
  let keyring: Keyring = new Keyring({ type: type === "ethereum" ? "ethereum" : "sr25519" });
  const signer: KeyringPair = keyring.addFromSeed(hexToU8a(privKey));
  let msg: string = "";
  if (prompt) {
    const response = await prompts({
      type: "text",
      name: "message",
      message: "Please enter payload",
      validate: (value) => true, //value < 18 ? `Nightclub is 18+ only` : true
    });
    msg = response.message;
  } else if (message) {
    msg = message;
  } else {
    throw new Error("sign must either provide message or use prompt");
  }
  // console.log('response',response, response['message'].length) //226 for relay, 216 pr moonbeam
  const signature: Uint8Array =
    type === "ethereum"
      ? signer.sign(hexToU8a(msg))
      : signer.sign(hexToU8a(msg), { withType: true });
  console.log("SIGNATURE : " + u8aToHex(signature));
  console.log("FOR PUBKEY : " + u8aToHex(signer.publicKey));
  return u8aToHex(signature);
}