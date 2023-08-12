/** @param {NS} ns **/

/**
 * returns an array of servers dynamically
 */
function dpList(ns, current="home", set=new Set()) {
	let connections = ns.scan(current)
	let next = connections.filter(c => !set.has(c))
	next.forEach(n => {
		set.add(n);
		return dpList(ns, n, set)
	})
	return Array.from(set.keys())
}

function threadCount(ns, hostname, scriptRam) {
	let threads = 0;
	let free_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname)

	//hostname == "home" ? free_ram-=5 : free_ram=free_ram;
  threads = free_ram / scriptRam
	return Math.floor(threads)
}

export async function main(ns) {
  ns.tail();
	let servers = dpList(ns).filter(s=> s != "home" && !ns.getPurchasedServers().includes(s));
	ns.disableLog("ALL");
	for (let server of servers) {
		await ns.scp("self_hack.js", server, "home");
	}

	while(true) {
		//let targets = dpList(ns).filter(s=> s != "home");//["n00dles", "foodnstuff"];//dpList(ns).filter(s => ns.getServerMoneyAvailable(s) > 500000 && !ns.getPurchasedServers().includes(s) && s != "home"/*&& growtime < 10 minutes && weakentime < 10 minutes*/);
		for (let server of servers) {
  		if (ns.hasRootAccess(server)) {
			  // divert all of this server's available threads to the most valuable command
		  	let available_threads = threadCount(ns, server, 2.45);
        if(available_threads>0){
          if(ns.exec("self_hack.js", server, available_threads)){
            ns.print(`Deploying to ${server}`);
          }
        }
  		} else {
			// open all possible ports on every server; then attempt to nuke the server
				try {
	  			ns.brutessh(server)
			  	ns.ftpcrack(server)
					ns.relaysmtp(server)
				  ns.httpworm(server)
  				ns.sqlinject(server)
				} catch {}
  
	  		try {
		  		ns.nuke(server)
          ns.installBackdoor(server);
		  	} catch {}
      }

		await ns.sleep(1)
		}
	}
}