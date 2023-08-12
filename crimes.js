/** @param [NS] ns */
export async function main(ns) {
  ns.disableLog("ALL");
  ns.tail();
  let _shoplift = [15287, 2, 1, "liftin"]
  let _robStore = [407651, 60, 1, "robin"];
  let _mug = [36689, 4, 1, "mug"];
  let _larceny = [815302, 90, 1, "larcenin"];
  
  //real
  let _deal = [122295, 10, 0.5676, "Dealin"];
  let _bond = [4586000, 300, 0.434, "Bondin"];
  let _traffick = [611477, 40, 0.3334, "Traffikin"];
  let _homie = [45861, 3, 0.7954, "Homing"];
  let _gTA = [1631000, 80, 0.1898, "GTAAAAAAAAAAAAAAA"];
  let _nap = [3669000, 120, 0.1016, "Nappin"];
  let _sassin = [12230000, 300, 0.0798, "sassinin"];
  let _heist = [122295000, 600, 0.056, "Heistin"];
  
  //Needed to be most useful over maxed
  //let _deal = [122295, 10, 0.7501, "Dealin"];
  //let _bond = [4586000, 300, 0.6001, "Bondin"];
  //let _traffick = [611477, 40, 0.6001, "Traffikin"];
  //let _homie = [45861, 3, 0.6001, "Homing"];
  ///let _gTA = [1631000, 80, 0.45, "GTAAAA"];
  //let _nap = [3669000, 120, 0.3001, "Nappin"];
  //let _sassin = [12230000, 300, 0.2251, "sassinin"];
  //let _heist = [122295000, 600, 0.0451, "Heistin"]; 
  //
  //Maxed
  //let _deal = [122295, 10, 1, "Dealin"];
  //let _bond = [4586000, 300, 1, "Bondin"];
  //let _traffick = [611477, 40, 1, "Traffikin"];
  //let _homie = [45861, 3, 1, "Homing"];
  ///let _gTA = [1631000, 80, 1, "GTAAAA"];
  //let _nap = [3669000, 120, 1, "Nappin"];
  //let _sassin = [12230000, 300, 1, "sassinin"];
  //let _heist = [122295000, 600, 1, "Heistin"]; 

  const fs = [_shoplift, _robStore, _mug, _larceny, _deal, _bond, _traffick, _homie, _gTA, _nap, _sassin, _heist];
  for(let crime of fs){
    let mPS = (crime[0]/crime[1]) * crime[2];
    ns.print(`${crime[3]}: ${mPS} /s`);
  }
  let highest = [0, ""];
  for(let crime of fs){
    let mPS = (crime[0]/crime[1]) * crime[2];
    if(mPS > highest[0]){
      highest[0] = mPS;
      highest[1] = crime[3];
    }
  }
  ns.print(`${highest[1]} is the best crime with an estimated ${highest[0]} money per second`);
}