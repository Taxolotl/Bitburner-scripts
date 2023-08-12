/** @param {NS} ns */
export async function main(ns) {
  while(true){
    ns.run("thousand.js");
    await ns.sleep(1);
  }
}