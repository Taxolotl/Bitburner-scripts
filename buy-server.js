/** @param {NS} ns */
import { maxServerSize } from "./lib";

export async function main(ns) {
  let sName = "";
  let sSize = "";
  if(ns.args[0]==undefined || ns.args[1]==undefined){
    sName = await ns.prompt("What is the server name?", { type: "text" });
    sSize = await ns.prompt("What is the server size? {say max for maximum size}", { type: "text" });
  }else{
    sName = ns.args[0];
    sSize = ns.args[1];
  }
  try{
    if(sSize == "max"){
      sSize = maxServerSize(ns);
      if(ns.purchaseServer(sName, sSize)){
        ns.tprint(`Purchased a new server named ${sName} with ${sSize}GB of RAM`);
      }
    }else{
      if(ns.purchaseServer(sName, sSize)){
        ns.tprint(`Purchased a new server named ${sName} with ${sSize}GB of RAM`);
      }
    }
  } catch {
    ns.tprint("hmmm. you did something wrong")
  }
}