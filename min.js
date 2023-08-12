/** @param {NS} ns */
export async function main(ns) {
  ns.killall("HowmanyYY")
  ns.deleteServer("HowmanyYY");

  ns.killall("Howmany");
  ns.deleteServer("Howmany");

  ns.killall("Howmany-0");
  ns.deleteServer("Howmany-0");

  ns.killall("Howmany-1");
  ns.deleteServer("Howmany-1");

  ns.killall("Howmany-2");
  ns.deleteServer("Howmany-2");

  ns.killall("Howmany-3");
  ns.deleteServer("Howmany-3");
} 