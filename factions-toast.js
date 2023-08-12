/** @param {NS} ns */
import {fullServer} from "./lib";
import {fullPlayer} from "./lib";

export async function main(ns) {
  let player = fullPlayer(ns);

  let csec = fullServer(ns, "CSEC");
  let nitesec = fullServer(ns, "avmnite-02h");
  let blackhand = fullServer(ns, "I.I.I.I");
  let bitrunners = fullServer(ns, "run4theh111z");
  let daedalus = fullServer(ns, "The-Cave");

  //CSEC
  while(player.skills.hacking < csec.requiredHackLevel){
    while(csec.openPortCount < csec.numOpenPortsRequired){
      await ns.sleep(1000);
    }
    await ns.sleep(1000);
  }
  ns.toast("You can join CSEC by backdooring CSEC; find CSEC", "success", null);


  //TIAN DI-HUI
  while(player.money < 1000000){
    while(player.skills.hacking < 50){
      await ns.sleep(1000);
    }
    await ns.sleep(1000);
  }
  ns.toast("You can join Tian Di-Hui by going to Chonqing, New Tokyo, or Ishima", "success", null);


  //NITESEC
  while(ns.getHackingLevel() < nitesec.requiredHackLevel){
    while(nitesec.openPortCount < nitesec.numOpenPortsRequired){
      await ns.sleep(1000);
    }
    await ns.sleep(1000);
  }
  ns.toast("You can join NiteSec by backdooring avmnite-02h; find avmnite-02h", "success", null);


  //SECTOR-12
  while(player.money < 15000000){
    await ns.sleep(1000);
  }
  ns.toast("You can join Sector-12 by going to Sector 12", "success", null);


  //20MILLIONFACTIONS
  while(player.money < 20000000){
    await ns.sleep(1000);
  }
  ns.toast("You can join Chongqing by going to Chongqing", "success", null);
  ns.toast("You can join New Tokyo by going to New Tokyo", "success", null);


  //ISHIMA
  while(player.money < 30000000){
    await ns.sleep(1000);
  }
  ns.toast("You can join Ishima by going to Ishima", "success", null);


  //AEVUM
  while(player.money < 40000000){
    await ns.sleep(1000);
  }
  ns.toast("You can join Aevum by going to Aevum", "success", null);


  //VOLHAVEN
  while(player.money < 50000000){
    await ns.sleep(1000);
  }
  ns.toast("You can join Volhaven by going to Volhaven", "success", null);


  //THE BLACK HAND
  while(ns.getHackingLevel() < blackhand.requiredHackLevel){
    while(blackhand.openPortCount < blackhand.numOpenPortsRequired){
      await ns.sleep(1000);
    }
    await ns.sleep(1000);
  }
  ns.toast("You can join The Black Hand by backdooring I.I.I.I; find I.I.I.I", "success", null);


  //BITRUNNERS
  while(ns.getHackingLevel() < bitrunners.requiredHackLevel){
    while(bitrunners.openPortCount < bitrunners.numOpenPortsRequired){
      await ns.sleep(1000);
    }
    await ns.sleep(1000);
  }
  ns.toast("You can join The Bitrunners by backdooring run4theh111z; find run4theh11z", "success", null);
  

  //DAEDALUS
  while(ns.getHackingLevel() < daedalus.requiredHackLevel){
    while(daedalus.openPortCount < daedalus.numOpenPortsRequired){
      await ns.sleep(1000);
    }
    await ns.sleep(1000);
  }
  ns.toast("You can join Daedalus by backdooring The-Cave; find The-Cave", "success", null);
}