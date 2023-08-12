/** @param {NS} ns */

function threadCount(ns, hostname, scriptRam) {
	let threads = 0;
	let free_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname);

  hostname == "home" ? free_ram-=1 : free_ram=free_ram;
  threads = free_ram / scriptRam;
	return Math.floor(threads)
}

function dpList(ns, current="home", set=new Set()) {
	let connections = ns.scan(current)
	let next = connections.filter(c => !set.has(c))
	next.forEach(n => {
		set.add(n);
		return dpList(ns, n, set)
	})
	return Array.from(set.keys())
}

export async function main(ns) {
  let allServers = dpList(ns);
  let hServers = dpList(ns).filter(s => !ns.getPurchasedServers().includes(s) && s != "home" && ns.getWeakenTime(s) < 600000);
  let aServers = dpList(ns).filter(s => ns.getServerMoneyAvailable(s) > 500000 && !ns.getPurchasedServers().includes(s) && s != "home" && ns.getWeakenTime(s) < 600000);
  await ns.sleep(1);
  if(aServers = []){
    while(aServers != hServers){
      await ns.sleep(1);
      for(let server in allServers){
        await ns.sleep(1);
        let available_threads = threadCount(ns, allServers[server], 1.75);
        if(available_threads != 0){
          for(let target in hServers){
            if(ns.getServerSecurityLevel(hServers[target]) > ns.getServerMinSecurityLevel(hServers[target])){
              ns.exec("wk.js", allServers[server], available_threads, hServers[target]);
            }else if(ns.getServerMoneyAvailable(hServers[target]) < ns.getServerMaxMoney(hServers[target])){
              ns.exec("gr.js", allServers[server], available_threads, hServers[target]);
            }
          }
        }
      }
    }
  }
  ns.run("go.js");
  ns.scriptKill("restore.js", "home");
}