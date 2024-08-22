import chalk from 'chalk';
import os from 'os';
import MercenariesBot from './core';

const color2 = chalk.hex('#BFD8AF');
const color1 = chalk.hex('#E1F0DA');

const mainCpu = os.cpus()[0];
const cpuModel = mainCpu?.model.split(' ') || [];
const cpuInfo = `${cpuModel[0]} ${os.cpus().length} cores ` + `@ ${(mainCpu?.speed || 0) / 1000}GHz `;

const version = color1('| mercenaries bot! ') + color2('v1.0');
const authors = color1('| With ♡ by ') + color2('timing1337');

const cpu = color1('| CPU: ' + cpuInfo);
const ram = color1('| RAM: ' + Math.floor(os.totalmem() / 1000000000) + 'GB');

console.log(
    color2(`

                                       
   ▐▀▄       ▄▀▌   ▄▄▄▄▄▄▄             
   ▌▒▒▀▄▄▄▄▄▀▒▒▐▄▀▀▒██▒██▒▀▀▄          
  ▐▒▒▒▒▀▒▀▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄        
  ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▒▒▒▒▒▒▒▒▀▄           ${version}
▀█▒▒▒█▌▒▒█▒▒▐█▒▒▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌          ${authors}
▀▌▒▒▒▒▒▒▀▒▀▒▒▒▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐   ▄▄     ${color1('| Using: TypeScript')}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌▄█▒█     ${color1('| License: MIT')}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒█▀      ${cpu}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀        ${ram}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌         
 ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐     
 ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌     
  ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐      
  ▐▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▌      
    ▀▄▄▀▀▀▀▀▄▄▀▀▀▀▀▀▀▄▄▀▀▀▀▀▄▄▀        
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`)
);
MercenariesBot.init();
