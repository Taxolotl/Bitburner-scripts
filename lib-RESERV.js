//import {  } from "./lib";

export function fullServer(ns, serv){
  let server = {};
  if(serv == ""){
    server.maxRam = Number.POSITIVE_INFINITY;
  }else{
    server = ns.getServer(serv);
    server.hackTime = ns.getHackTime(serv);
    server.growTime = ns.getGrowTime(serv);
    server.weakenTime = ns.getWeakenTime(serv);
    server.requiredHackLevel = ns.getServerRequiredHackingLevel(serv);
  }
  return server;
}

export function fullPlayer(ns){
  let player = ns.getPlayer();
  return player;
}

export function maxServerSize(ns){
  let gb = 55000;
  let size = 20;
  let price = Math.pow(2, size)*gb;
  while(price>ns.getPlayer().money){
    size--;
    price = Math.pow(2, size)*gb;
    //await ns.sleep(1);
  }
  return Math.pow(2, size);
}