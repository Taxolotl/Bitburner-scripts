/** @param {NS} ns */
export async function main(ns) {
  let host = ns.getHostname();
  while(true){
    if (ns.getServerSecurityLevel(host) > ns.getServerMinSecurityLevel(host)) {
		// weaken the host while security > minsecurity
		  await ns.weaken(host);
      ns.print(`Weakening ${host}`)
    } else if (ns.getServerMoneyAvailable(host) < ns.getServerMaxMoney(host)) {
					// grow the host while money < maxmoney
	  	await ns.grow(host);
      ns.print(`Growing ${host}`)
    } else {
      await ns.hack(host);
      ns.print(`Hacking ${host}`);
	  }
  }
}