/** @param {NS} ns */
import { fullServer } from "./lib";

export async function main(ns) {
  ns.disableLog("ALL");
  let servers = ns.getPurchasedServers();
  let lowest = "";
  while(true){
    await ns.sleep(1000);
    for(let server in servers){
      if(fullServer(ns, servers[server]).maxRam < fullServer(ns, lowest).maxRam){
        lowest = servers[server];
      }
    }
    if(ns.upgradePurchasedServer(lowest, ns.getServer(lowest).maxRam*2)){
      ns.print(`Upgraded ${lowest}`);
    }else{
      ns.print(`L bozo get more money to upgrade ${lowest} lol`);
    }
  }
}