import {
  /*IPFS,
  Buffer*/
  _w3_ipfs_cat
} from "@web3api/wasm-ts/assembly/host/ipfs";

export function getString(cid: string): string {
  /*const res = IPFS.cat(cid);
  return Buffer.toString(res);*/
  _w3_ipfs_cat("test this");
  return "hey";
}