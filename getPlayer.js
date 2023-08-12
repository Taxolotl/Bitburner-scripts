/** @param {NS} ns */
import {fullPlayer} from "./lib";

export async function main(ns) {
  ns.disableLog("ALL");
  ns.tail();
  while(true){
    var player = fullPlayer(ns);
    await ns.sleep(10);
    ns.clearLog();
    ns.print(`City: ${player.city}`);
    ns.print(`\nEntropy: ${player.entropy}`);
    ns.print(`\nExp: `);
    for(var exps in player.exp){
      ns.print(`-->${exps}: ${player.exp[exps]}`);
    }
    ns.print(`\nFactions: ${player.factions}`);
    ns.print(`\nHealth: `);
    for(var healt in player.hp){
      ns.print(`-->${healt}: ${player.hp[healt]}`);
    }
    ns.print(`\nJobs: `);
    /*
    put this in a for loop that prints all of the players jobs
    ns.print(`\n : ${player.jobs}`);
    */
    ns.print(`\nLocation: ${player.location}`);
    ns.print(`\nMoney: ${player.money}`);
    ns.print(`\nMults: `);
    for(var mult in player.mults){
      ns.print(`-->${mult}: ${player.mults[mult]}`);
    }
    ns.print(`\nMurks: ${player.numPeopleKilled}`);
    ns.print(`\nSkills: `);
    for(var skill in player.skills){
      ns.print(`-->${skill}: ${player.skills[skill]}`);
    }
    ns.print(`\nTotal playtime: ${player.totalPlaytime}`);
  }
}