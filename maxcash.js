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

	hostname == "home" ? free_ram-=5 : free_ram=free_ram;
  threads = free_ram / scriptRam
	return Math.floor(threads)
}

export async function main(ns) {
  ns.tail();
	let servers = dpList(ns)
	//let target = "foodnstuff"
	ns.disableLog("ALL");
	for (let server of servers) {
		await ns.scp(["wk.js", "hk.js", "gr.js"], server, "home")
	}

	while(true) {
		let targets = dpList(ns).filter(s => ns.getServerMoneyAvailable(s) > 500000 && !ns.getPurchasedServers().includes(s) && s != "home");
		for (let server of servers) {
      for(let target of targets) {
        //ns.scriptKill("info.js");
        //ns.run("info.js", 1, target);
        //ns.tail("info.js", "home", target);
  			if (ns.hasRootAccess(server) && ns.hasRootAccess(target)) {
				// divert all of this server's available threads to the most valuable command
	  			if (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target)) {
		  			let available_threads = threadCount(ns, server, 1.75)
					// weaken the target while security > minsecurity
			  		if (available_threads >= 1) {
				  		ns.exec("wk.js", server, available_threads, target)
              ns.print(`Weakening ${target} on ${server} ${available_threads} times.`)
					  }
  				} else {
	  				let available_threads = threadCount(ns, server, 1.7)

					// hack the target
		  			if (available_threads >= 1) {
			  			ns.exec("hk.js", server, available_threads, target)
              ns.print(`Hacking ${target} on ${server} ${available_threads} times.`)
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
			  	} catch {}
        }
			}

		await ns.sleep(1)
		}
	}
}