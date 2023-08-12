/** @param {NS} ns */
import {fullServer} from "./lib";

export async function main(ns) {
  ns.disableLog("ALL");
  const args = ns.flags([["help", false]]);
  let server = args._[0];
  if (!server || args.help) {
    ns.tprint("This script gives you all of the information in a server.");
    ns.tprint(`Usage: run ${ns.getScriptName()} SERVER`);
    ns.tprint("Example:");
    ns.tprint(`> run ${ns.getScriptName()} n00dles`);
    ns.tprint(`Opens a tail menu that has all of a servers information`);
    return;
  }
  ns.clearLog();
  ns.tail();
  let serv;
  while(true){
    serv = fullServer(ns, server);
    ns.clearLog();
    ns.print(`Hostname: ${serv.hostname}`);
    ns.print(`IP: ${serv.ip}`);
    ns.print(`Organization name: ${serv.organizationName}\n\n`);

    ns.print(`Admin?: ${serv.hasAdminRights ? 'Yes' : 'No'}`);
    ns.print(`SSH port: ${serv.sshPortOpen ? 'Open' : 'Closed'}`);
    ns.print(`FTP port: ${serv.ftpPortOpen ? 'Open' : 'Closed'}`);
    ns.print(`SMTP port: ${serv.smtpPortOpen ? 'Open' : 'Closed'}`);
    ns.print(`HTTP port: ${serv.httpPortOpen ? 'Open' : 'Closed'}`);
    ns.print(`SQL port: ${serv.sqlPortOpen ? 'Open' : 'Closed'}`);
    ns.print(`Number of ports required to hack: ${serv.numOpenPortsRequired}`);
    ns.print(`Number of open ports: ${serv.openPortCount}`);
    ns.print(`Hacking level required to hack: ${serv.requiredHackingSkill}\n\n`);

    ns.print(`Available money: ${serv.moneyAvailable}`);
    ns.print(`Maximum money: ${serv.moneyMax}\n\n`);

    ns.print(`Number of cores: ${serv.cpuCores}`);
    ns.print(`Used RAM: ${serv.ramUsed}`);
    ns.print(`Max RAM: ${serv.maxRam}`);
    ns.print(`Backdoor installed?: ${serv.backdoorInstalled ? 'Yes' : 'No'}`);
    ns.print(`Hack difficulty: ${serv.hackDifficulty}`);
    ns.print(`Base difficulty: ${serv.baseDifficulty}`);
    ns.print(`Minimum difficulty: ${serv.minDifficulty}`);
    ns.print(`Server growth: ${serv.serverGrowth}\n\n`);

    ns.print(`Purchased by player?: ${serv.purchasedByPlayer ? 'Yes' : 'No'}\n\n`);
    
    ns.print(`Connected to: ${serv.isConnectedTo}`);

    ns.print(`Hacktime: ${serv.hackTime}`);
    ns.print(`Weakentime: ${serv.weakenTime}`);
    ns.print(`Growtime: ${serv.growTime}`);
    await ns.sleep(1)
  }
}