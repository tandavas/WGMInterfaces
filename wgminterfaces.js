const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'wgminterfaces',
      message: 'Which WGMInterfaces do you like?',
      choices: ['rainbow', 'verified', 'gm', 'browser'],
    },
  ])
  .then(answers => {
    if (answers.wgminterfaces === 'rainbow') {
      console.info(
      `      ooooooooddddddddddddddddddddddddddddddddddddddddddddddddddddxxxddddddddddddddddddddddddddddddddddddddddddooddxkxoooooooo
      dooddoddddoddddddddddddddddddddddddddddddddddddddddddddddddddddxxdddddddddddddddddddddddddxdddxddddddddddddddddddooooooo
      dddoodddddddddddxkxdddddddddddddddddddddddddddddddddddddddddddddxxddddddddddddddddddddxxdddddddddxdddddddddddddoddddddoo
      dddddddddddddddddxxdddddddddddddddddddddddddddddddddddddddddddddddxxddddddddddddddddxxdddddddddddddxxdddddddddddodxkxdod
      ooddddddddddddddddddddxddddddddddddddddddddddddddddddddddddddddddddxddddddddddddddxxdddddddddddddddddxkxdddddddddddddddd
      dddddddddddddddddddddkkxddddddddddddddddddddddddddddddddddddddddddxxddddddddddddxxxddddddddddddddddddxxxdddddddddddddddd
      ddddddddxxxdddddddddddxxxxdddddddddddddddddddddddddddddddddddddddxxdddddddddddxxdddddddddddddddddddddddddddddddddddddddd
      ddddddddxkxddddddddddddddxdddddddddddddddddddddddddddddddddddddxxxddddddddddxxddddddddddddddddddddddddddddxkkddddddddddd
      dddddddddddddddddddddddddddxxdddddddddddddddddddddddddddddddxxxddddddddddxxxxddddddddddddddddddddddddddddddxxxdddddddddd
      dddddddddddddxkxxdddddddddddddxxdddddddddddddddddddddddddxxxxxddddddddddxxxddddddddddddddddddddddddddddddddddddddddddddo
      ddddddddddddddxxxxddddddddddddxxxxddddddddddddddddddddddxxxxddddddddddxxxdddddddddddddddddddddddddddddddddddddddxddddddd
      dddddddddddddddddxxddddddddddddddxxxddddddddddddddddddxxxdddddddddddddxxdddddddddddddddddddddddddddddddddddddddddxdddddd
      dddddddddddddddddddxxddddddddddddddxxxdddddddddddddxxxxdddddddddddddddxxxddddddddddddddddddddddddddddddddddddddddxdddddd
      ddddddddddddddddddddddxxdddddddddddddxxxxdddddddxxxxxddddddddddddddddddxxxddddddddddddddddddddddddddddddddddddddxxdddddd
      ddddddddddddddddddddddxxxxddddddddddddxxxxxdxxkkxxkkkkkxddddddddddddddddxxxxdddddddddddddddddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddxxddddddddddddddxxkOOxollodxkOOOkxdddxdddddddddddxxxxxddddddddddddddddddddddddddddddxxddddddddd
      dddddddddddddddddddddddddddxxxddddddddddddk0koc:::clodxxkOkdodddddddddddddddxkkxddddddddddddddddddddddddddxxdddddddddddd
      dddddddddddddddddddddddddddddxxxdddddddddxOkoc:::::cccccllllcccllllllloooodddxxxddddddddddddddddddddddddxxxddddddddddddd
      ddddddddddddddddddddddddddddddxxxdddddddxkxllccccccccccccccccccccccccccccclllooddxxxxddddddddddddddddddxxxdddddddddddxxd
      ddddddddddddddddddddddddddddddddxxxddddooolcccccccccccccccccccccccccccccccccccclloxkkxdddddddddddddddxxddddddddddddddddd
      dddddddddddddddddddddddddddddddddxxddolccccccllllllllllllllllllllllloollllllccccccllodddddddddddddxxxddddddddddddddddxxd
      dddddddddddddddddddddddddddddddddxdlcccccccodoolloodxxdoolllllllloddxxxdoooooolcccccccloodddddddxxxddddddddddddddddddddd
      dddddddddddddddddddddddddddddddddlccccccclodlllodkkxddxkkdoddddddxkkkddxxkxlclodolccccccclodxxdxxxdddddddddddddddddddddd
      ddddddddddddddddddddddddddddxxxocccccccclodlclooxl'...:okOkxkkkxdxd:...,lxOOdlclodollccccccloddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddxkkxlcccccccllldollolol.  ..;dkO0kdxkdod;  ..,lkOXXOxddddolllcccccclodddddddddxxxdxxdddddddddd
      ddddddddddddddddddddddddxk00dcccccccllllloddxxool. ....:ddoolodlll:,'...,oOKNKxxkxdollllllcccccloddddxxxddddddddxddddddd
      xxddddddddddddddddddddxk0X0dccccccclllllodxkkkdlol;....',,::;;;;;;;;cc'..;dKNKxxxxxxdollllllc:ccclodxddddddddddddxdddddd
      dxxddddddddddddddddddk0XNKdcccccclllllldxkxxkkOOxddolllo:',;;;:;::::cooloxKNNXKOkkkkkkxollllllcccclodddddddddddddddxxddd
      dddxxxdddddddddddddxOXNNXxcccccccllllodkkkkkkOKXX0OkkkO0kocclllllllloxkOO0KXXXXXK0OkkkOkxlcllllccccclddddddddddddddddxxd
      dddddxxxdddddddddxk0NNNXklcccccclllloxkOOOOKK0000KK0kkkkkkOkkkkkxkxxxxkkOOkO0KKKKXXKOkkkkkdlcllllccccloddddddddddddddddd
      ddddddxxxddddddddkKNNXX0occcccclloloxkkkO0KNNNX0kxkxkkkkxxdddddddddddddxxkkkOOO0KXNNXKOkkkkxolllllc:cclodddddddddddddddd
      ddddddddddxxdxxxx0XXXX0o:;:ccclollodkkkO0KNNNXKOkkkkkxddooooddddddddoddddddxxkkkkOKXXNX0kkkkkdcllllc:clldddddddddddddddd
      ddddddddddddddddOXXKOo:;,,,;::ccclokkkOOKNNNX0kkkkkxdoooddoooolccccclloooodddxxkkkO0KXNXKkxkkkdllllllooddddddddddddddddd
      dddddddddddddddk00xl:,,;;::::;;:cloddxk0XNNX0kkkkkxoodddoolc:;,,,,,,,,;:cloooddxkkkkO0XNNXOxxxdllllodddddddddddddddddddd
      dddddddddddddddxdc;,;;;:c::::clooollodxkkO00kkkkkdoooddol:;,,,,,,,,,',,',,:loodddxkkkO0K0Oxdollloodddddddddddddddddddddd
      dxxdddddddddddddoollllc::::cloooloddxddddddooodddlooodoc:;,,,,,,,,,,,,,,,,,,coooodxxxxxxdooooooddddddddddddddddddddddddd
      ddddddddddddddddxxxxddoooooooooddxxdddddoollllc:;,;:coddoolllc:;,,,,,,,,,,,,,:ooddxxxxdddddddddddddddddddddddddddddddddd
      dxxddddddddddddxxxdddddddddddddxxdddddoollllc:,,,,,:ldxxxxdxxddooc;,,,,,,,;;codxxxxxddxxxxdddddddddddddddddddddddddddddd
      dddddddddddddxxddddddddddddddddddddddooolc:;,',,;codddxxxxxxxxxxxdlc:;;;;:ldxxxxxddddddxxxxxdddddddddddddddddddddddddddd
      dddddddddddxxdddddddddddddddddddddddxddddlc:,,:loddddddxddxxxxdxxdddlcclodddddddddddddddddxxxddddddddddddddddddddddddddd
      dddddddddxxxddddddddddddddddddddddddddddxxxxdddxxxxxxxxxxxxxxxxxdddxdddxxxxxxxxddddddddddddddxxxdddddddddddddddddddddddd
      ddddddddxxddddddddddddddddddddddddddddxxdl::::;;;;;;;;;,,;;;;;;;'',;;::::cccllloxxddddddddddddxxxxdddddddddddddddddddddd
      ddddddxdddddddddddddddddddddddddddddddxdl;'....................... ........'',,cdxxxddddddddddddxxxddddddddddddddddddddd
      dddddxxdddddddddddddddddddddddddddddddxl,......................... .........''';odxxxdddddddddddddxxxddddddddddddddddddd
      dddddxxdddddddddddddddddddddddddddddddxo;'...................................',:oddddxxxdddddddddddddxxxdddddddddddddddd
      ddddddxxddddddddddddddddddddddddddddddxo;........................  ..........'';odddddxxxxddddddddddddxxxxxddddddddddddd
      dddddddxxddddddddddddddddddddddddddddddl,......................... .........,,':odddddddxxxxdddddddddddxxkxddddddddddddd
      ddddddddddxxddddddddddddddddddddddddddoc,......................... .........''',coddddddddxxxddddddddddddddddddddddddddd
      dddddddddddxkkxddddddddddddddddddddol:,''......................... ...........''',:ldddddddddxxddddddddddddddxkxdddddddd
      ddddddddddddxxxddddddddddddddddddoc;,''............................ .........','''',;codddddddxxxxxddddddddddxxxdddddddd
      xddddddddddddddddxxddddddddddddoc,'''................................'.....':llc;,''',;codddddddkkkdddddddddddddxxdddddd
      ddxxddddddddddddxkkxdddddddddoc;''.''.......................................,cllc:;'''',;coddddddddddddddddddddddddxdddd
      ddddxkxddddddddddxxxxxddddddl:,''............................................';:cc;'''''',;ldddddddddxxxdddddddddddddddd
      ddddxkxddddddddddddddxdxdddc;,''................................................''''.'''',,;codddddddxkxxdddddddddddodxd
      dddddddddddddddddddddddxxdc,'......................................................'.''.'',,;codddddddddxxdddddddddddddd
      dddddddddxkxddddddddddddoc,,'......................................................'''..'''',;codddddddddddxxddddddddddd
      ddddddddddxxxxdddddddddo:,''.......................................................'''''''''',,:oddddddddddddddddddddddd
      ddddddddddddxxdddddddddl;'''....................................................''.''..'''''',',cdddddddddddodxxdddddddd
      `);
    } else if (answers.wgminterfaces === 'verified') {
      console.info(
      `      ooooooooooooooooooooooooooooodddddddddddddddddddddddddddddddddddddddddddddddddddddddddoodddooooooooooooooooooooooooooooo
      ooooooooooooooooooooooooooodddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddoooooooooooooooooooooooooo
      ooooooooooooooooooooooodddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddoooooooooooooooooooo
      ooooooooooooooooooooddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddoooooooooooooooooo
      ooooooooooooooooodddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddoooooooooooooooooo
      ooooooooooooooodddddddddddddddddddddddddddddddddddddddddoodddddddddddddddddddddddddddddddddddddddddddddddooooooooooooooo
      ooooooooooooddodddddddddddddddddddddddddddddddddddddxxdlllooddddddddddddddddddddddddddddddddddddddddddddddddoooooooooooo
      oooooooooodddddddddddddddddddddddddddddddddddddddxkOOdccllllloodddddddddddddddddddddddddddddddddddddddddddddddoooooooooo
      ooooooooodddddddddddddddddddddddddddddxdolloooddk00Oocclllllllloddddddooloooddddddddddddddddddddddddddddddddddoooooooooo
      oooooodddddddddddddddddddddddddddddxkOklclllllloddolcllllllllllllooollllllllloddddddddddddddddddddddddddddddddddddoooooo
      oooddddddddddddddddddddddddddddddkO000d:cllllllllllllllllllllllllllllllllllllodddddddddddddddddddddddddddddddddddddddooo
      ooddddddddddddddddddddddddddddddx00000d:clllllllllllllllllllllllllllllllllllllodddddddddddddddddddddddddddddddddddddddoo
      ooooodddddddddddddddddddddddddddk0000Oo:cllllllllllllllllllllllllllllllllllllllodddddddddddddddddddddddddddddddddddddddo
      ooodddddddddddddddddddddddddddddkOOOkdcclllllllllllllllllllllllllllllllllllllllloodddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddxdoloolllllllllllllllllllllllllllllllllllllllllllllllllllloooddddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddxO0klcclllllllllllllllllllllllllllllllllllllllllllllllllllllllllldddddddddddddddddddddddddddddd
      dddddddddddddddddddddddk0KK0xc:llllllllllllllllllllllllllllllllllllllllllllllllllllllllllloddddddddddddddddddddddddddddd
      ddddddddddddddddddddddx000OOko:cllllllllllllllllllllllllllllllllllclcccldkO0Okdllllllllllodddddddddddddddddddddddddddddd
      ddddddddddddddddddddddxOOOOOkko:cllllllllllllllllllllllllllllllcccc::cdOKXXXXX0xlllllllllodddddddddddddddddddddddddddddd
      dddddddddddddddddddddddkOOOOOOxc:lllllllllllllllllllllllllllllccc:;;lkKXXXXXXXXOollllllllodddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddkOOO00kl:llllllllllllllllllllllllllcccc:;;cx0XXXXXXXXXXkollllllllodddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddx0KKX0oclllllllllllllllldkkkxdollllcc:;;:dOKXXXXXXXXXKkoollllllllloodddddddddddddddddddddddddddd
      ddddddddddddddddddddddddkXX0xlcllllllllllccc::lkKXXXXKOxolc:;;:okKXXXXXXXXXXOxoolllllllllllloodddddddddddddddddddddddddd
      ddddddddddddddddddddddxOXXklclllllllllllc:;,,cx0XXXXXXXXOd:::lkKXXXXXXXXXX0kooollllllllllllllllodddddddddddddddddddddddd
      dddddddddddddddddddddkKXK0o:cllllllllllcc:,,,cxOKXXXXXXXXKOO00KXXXXXXXXXKkdooolllllllllllllllllloddddddddddddddddddddddd
      ddddddddddddddddddddOK0OOkdlcclllllllllcc:;,';lxO0XXKK0OO0XXXXXXXXXXXKKKOdooollllllllllllllllllooddddddddddddddddddddddd
      ddddddddddddddddddddOOkkkxxdlcccllllllllcc:;,,,:ok0OOd,..cx0XXK00XXKOOOd,..cooollllllllllllllooddddddddddddddddddddddddd
      ddddddddddddddddddddxkkxxxddddolcclllllllcc::;,,;x0kk:  .,lkKXd.;Ok;'ok:  .,ldxllllllllllllloddddddddddddddddddddddddddd
      ddddddddddddddddddddddxxxxxxxxxkdccllllllllcc::;;o0Okx:'.'l0NNk,..'.,dOxc'.'cOkllllllllllllodddddddddddddddddddddddddddd
      dddddddddddddddddddddddddxkkkkOOkl:lllllllllllcc::okOOOOO0KXXXX0o;;:oOOOOOk0KOollllllllllllodddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddxO0000klclllllllllllllccccloddddxkkkkddooolodxxxkxdolllllllllllllloddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddx0XXX0o:lllllllllllllllllcc:::cclooooooololllllllllllllllllllllllloodddddddddddddddddddddddddd
      ddddddddddddddddddddddddddkXXKKOl:llllllllllllllllllllllllllooollllllllllllllllllllllllllllllodddddddddddddddddddddddddd
      dddddddddddddddddddddddddx0K00Oko:cllllllllllllllllllllllllllllllllllllllllllllllllllllllllllodddddddddddddddddddddddddd
      dddddddddddddddddddddddddxOOkkxdolcccccccclllllllllllllllllllllllllllllllllllllllllllllooooooddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddxkxdooooooollccccclollllllllllllllllllllllllllllllllllllllok00Okxxdddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddoooodddc:llllllllllllllllllllllllllllllllllllllldOOkxddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddxxkkkdcclllllllllllllllllllllllllllllllllllllodddddddddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddddddddddkOOkkkko:lllllllllllllllllllllllllllllllllllllodddddddddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddddddddddxOOOkkkdc:llllllcc:::cllllllllllllolcc::ccllllodddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddkOkxxdol::cllc:;;;;;;;::clllllllllc:;;;;:clooddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddxxxdolccloddo:;;,;;;;;,,;:clllool::::ccodxxddddddddddddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddddddddddddddoooodxxddddoc;;;;;;;;;::clodddoooddxxxddddddddddddddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddddddddddddxOOOkxdoooollllc:c:cc:::::coxxxxxkkkkkOOkxddddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddxOOkkxdollcc:::::::::;;;;;clldxxkkOO0000OOOxdddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddxOOxxdoollcc:::;;;;;;;;;;;loloxxxkkOOOOOOOOxdddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddxOkxddollc:::;;;;;,,,,,,,;loodxxxkkOOOOOOOOxdddddddddddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddddxkOO0000K0Okxdoollcccc:::::::::::looodxxxkkkkOOOO0OOOOOkkxddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddk0KKK0OOkxxdoollcccccccccccccllllc:looodxxxxkkkOOO0000OOOOOxdddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddxO0OOkxddoolllccc:::::::::::::cccc::lolldxxxxdxkkkOOO0000OOOkxddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddxOOkxxddooolllccc::::::::::::::::c::clllodddc;;;;::cokOO0OOOkxddddddddddddddddddddddddddddd
      dddddddddddddddddddddddddddddxOOkxxddooolllcccc::::::::::::::::::cllloddo:,,.''.,lkOOOOOOkxddddddddddddddddddddddddddddo
      oooooddddddddddddddddddddddddxOOkxxddooolllcccc::::::::::::::::::clllodddllolloodkOOOOOOOOxddddddddddddddddddddddddddddd
      oooooddddddddddddddddddddddddxOkkxdddooolllcccc::::::::::::::::::cllcodddddxxxkkkkkkOOOOOkxddddddddddddddddddddddddddddo
      ooooodddddddddddddddddddddddddkkxdoolllccc::::::;;;;;;;;;;;;;;;;;clcclooooodddxxxxkkkkkkOkddddddddddddddddddddddddddoooo
      oooooddddddddddddddddddddddxOO00OOkxxdollcc::::::::::::::::::cc::cooloddddddxxxxxkkkkkkkOOOkxdddddddddddddddddddddoooooo
      ooooooooddddddddddddddddddk0KK00OOkxxddollccc:::::::::ccccclllllc:looldxxxxkkkOOOO000000OOOOOxddddddddddddddddddoooooooo
      oooooooooddddddddddddddddxO0OOkkxddooolllccc:::::::::::::::ccccc::lllloxxxxxkkOOO000000000OOOOxddddddddddddddddooooooooo
      ooooooooooooddoddddddddddkOOOkxxddoooolllcccc:::::::::::::::::ccc:cllloddddxxxkkkOOOO0000OOOOOxdddddddddddddoooooooooooo
      oooooooooooooooddddddddddkOOkkxxddoooolllcccc:::::::::::::::::ccc:llllodddddxxkkkkOOOOOO0OOOOOxddddddddddddooooooooooooo`);
    } else if (answers.wgminterfaces === 'gm') {
      console.info(
      `      lllllllllllllllllloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooollll
      llllllllllllllllooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooolll
      lllllllllllllllooooooooooooooooooooooooooooooooooooooooooddddddoooooooooooooooooooooooooooooooooooooooooooooooooooooooll
      lllllllllllooolloooooooooooooooooooooooooooooooooooooooxkOOOOOOkdooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      llllllllllloooloooooooooooooooooooooooooooooooooooooood00OOOO0KK0doooooooooooooooooooooooooooooooooooooooooooooooooooooo
      llllllllooloodddoooooooooooooooooooooooooooooooooooooox000O0000K0xoooooooooooooooooooooooooooooooooooooooooooooooooooooo
      llllllloloxO0KKK0kdooooooooooooooooooooooooooooooooooox000O0000K0xoooooooooooooooooooooooooooooooooooooooooooooooooooooo
      llllolllok0KKKKKXXK000Okdoooooooooooooooooooooooooooook000O0000K0koooooooooooooooooooooooooooooooooooooooooooooooooooooo
      lllllloldOKXXXKKKKKKXXXX0doodddddooooooooooooooooooooox0K000000K0xoooooodoooooooooooooddddddoooooooooooooooooddxxxxxdooo
      llllllodkKXXXXXXXKKKKKXXXOxk0OOOOkxooooooooooooooodooodk0K000000kdodoooooooooooooooodxOOOOOOkdooooooooooooxk0KKXXXXXXK0k
      lllolok00000K00KKKKXXXXXXXXK0OO0000kxdoooooooooooodooooddkkkkkxddooodooooooooooooodxO0OOOO0KKOdoooooooooxOKXXXXXXXXXXXXX
      llllldO0OOOOOOOOOO000000KKXXK00000000OxoooooooooooddxxkkkOOkkkkkkkxxddooodddoododxO0OOOOO000K0xooooooodkKXXKKKKKKXXXXXXX
      lllllokOOkOOOkkkOOO00OOO00KKKK0000O0000xoooooodkO0KXXXXXXXXXXXXXXXKKK0Okxddodoodk00OOOO0000K0kdoooooook0K000000KKKKKXXXX
      llllloodxkkkkxxxxkkkkxxkkkxxOKKK0000000kdodxk0XNNNNXXXKKKKKKKKKKKKKKXXXXXK0kxdddkK000000000kddoodoooodO000OOO0000KKXXXXX
      llllllooooooooooooooooooooooodOKKK0000Oddk0XWWNNXXKKKKKKKKKKKKKKKKKKKXXXXXXXK0kdxOK000000kddoodooooooxOOOOOOOO00KKXXXXXX
      llllloooooooooooooooooooooooooodkkOOkxxOKNWNNXXKK0000000000KKKKKKKKKKKXXXXXXXXX0kxkkOOkkddooddodddoooxOOOkkO0KKXXXXXXXXN
      lllllllooooooooooooooooooooooooooooodkKNWNNXKK0000000000000000KKKKKKKKXXXXXXXXXXX0kdddodddddoodddkOO0KK0OkO0KXXXXXXXXXXX
      lllllllooooooooooooooooooooooooooood0XNNXXKK000OOOOOOOO00000000KKKKKKKXXXXXXXXXXXXXOxdddoddoddx0KXNXXXXK00KKXKKKKKKKKXXX
      llllllloooooooooooooooooooooooooooxKNNNXKK000OOOOOOOOOOO000000000KKKKKKXXXXXXXXXXXXX0xddddddxOXXXXKKKKKKKKKKK000000KKKKK
      lllllllooooooooooooooooooooooooooxKNNXXK00OOOOOOOOOOOOOOOOO0000000KKKKKKXXXXNNNNNNXNNKxoddddOKKKK0000000KK000OOOO0000000
      lllllllloooooooooooooooooooooooodKNNXXK00OOOOOOOOOOOOOOOOOOOO00000KKKKKKKXXXXNNNNNXXXX0xdddx0000OOOOOOOOO0OOOOOOOOOOOO00
      llllllloooooooooooooooooooooooooONNXXKK00OOOOOkkkOOOOOOOOOOOOO000000KKKKKKXXXXXNNNXNXXXOdddkOOOOOOOkkkOOOOOOOkkkkOOOOOO0
      lllllllooooooooooooooooooooooooxXNXXKK00OOOOOOOkdoooodxkOOOOOOO0000000OkxxxkOKXXXXXNXXNKxodxkOOkkkkkkkkkkkkkkkkkkkOOOOOO
      lllllooooooooooxkOOkkOkkkkkxdooONNXXK000OOOOOxlc:::::ccldxkOOOOOO00Oxlc::lllllox0XNXXXXXOdodO0OOOOOOOOOOkkkkkkkkkkkOOOOO
      ddooooooooooookKK000000000KKOdd0NNXKK000OOOko:ldddxdc::loodxkkOOOOkl:odxOkdllloookKXXXXX0ddO00OOOOOOOO0K0OkxxxkkkkkkOOOO
      OOOkkxxxddooodKXK0000000000K0xd0NNXKK00OOOOd:okxkxc.. .:loxdodkkOOc:xkkOo,. .,codxx0XXXN0dk000000000O00KK0xddddxxxkkkkOO
      OOOOOOOOOOOkxkKXXK0000000000Oxd0NNXKK00OOko;cOkxko.   .:oodkOd::;;,oOkOx,    'lodkdooOXX0dx00000000000000Odooooooodddddd
      OOOOOOOOOOOOOOOKKKKKKK0000OkdooONNXKK00O0x,.c0Oxkd,.....:lll:;:ooc;dOlld:.....;cdkx:.:0XOdddkO00000000OOxdoooooooooooooo
      OOOOOOOOOOOOOOOOOO0000OOkkxdoookXNXXKK0OOkoccxKkkxo;....;ol. .;xOOdlc..lxc'...,lkOdclOKKxooooddddddddddooooooooooooooooo
      kkkkOOOOOOOOOOOOOOOOOOOOOOOOkxxx0NNXKK00OOOOxcd0Okxxollodxd;...,coo:..,oOOkdodxOOxcl0XXOdooooooooooooooooooooooooooooooo
      kkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOO0XNXXKK0OOOOkdccdddddddddoccc:'......';oxdxxxxxxo:lOKXKxoooooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkOkkkOOOOOOOOOOOOOOOO0XNXXK00OOOOOkdc;,,,;;:cclxkkxoccccodl:;,,,;:clox0KKKkooooooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOO0XNXKK00OOOOkkkxdollodxkkkkkkkkkkkkOOkkxdodxk00KKK0kdodooooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOO0XXXKK0OOOOkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOO0000KK0xooooooooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOKXXKK00OOOOkkkkkkkkkkkkkkkkkkkkkkkOOOOOO000K0kdoooooooooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkOOkOOOOO000OOO0KKKK000OOOkkkkkkkkkkkkkkkkkkkkkkOOOOO00K0kxxxkxxxdooooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkOkOOO0KKK00000O00KKK00OOOkkkkkkkkkkkkkkkkkkkkkOOO0000kxdk000000Oxdooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkkkO0KKK00000KK0OOO0KKK00OOkkkkkkkkkkkkkkkkkkkOO000OxdddkK000000K0Oxdooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkO0KXK00000000K0OOOOOO00000OOOkkkkkkkkkkkkkkOOOkkxdddoodkK00000000K0Oxoooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkOkOXXK0000000000OOOOOOOOOOOO00OOOOOOOOOOOOOO0Okxdooddddoodk0K0000000KKOdooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkOKXK00000K00OOOOOOOOOOOOOOOOOOOO000000OOOOOOOOOkxdddoododxk0K000000KOdooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkk0KXKKKK00OOOOOOOOOOOOOOOOOOOO0KK000000OOOOOOOOOOOkkxddooooxO00K000Oxoooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkOkOO000OOOOOOOOOOOOOOOOOOOOOO0KK00000000OOOOOOOOOOOOOOkkxddoodxkkxxdooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkkOkkkkkkkOOOOO0KXK00OOkkkkxxxxkkkkkkkOkooxkO0000KKKKKKK0OOkkxddoooooooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOO00OkxddooolllcccccclllllcllokkxkkkkOOOO0OOOOOOOkkxddoooooooooooooooooooooooooooo
      kkkkkkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOkdlc::;;;,,,,''',,'',,,:loocddc::ccccllldkOOOOOOOOOOkkxxddooooooooooooooooooooooo
      kkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOkdlc:;,,,,'''''''''''.'coolcdo;;;:::::clokOOOOOOOOOOOOOOOkkxddooooooooooooooooooo
      kkkkkkkkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkdl:;,,,,''''''''''''',ldlc:ol;,;;;:::ccokOOOOOOOOOOOOOOOOOOOOkkxxddooooooooooooo
      kkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkoc:;;,,''''''.'..'''',ldlccoo;;;;;::clcokOOOOOOOOOOOOOOOOOOOOOOOOOkkxxddoooooooo
      OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkxlc:;,,,'''''''''''''',oxolcod:;;;::::ccoxkOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkkkkkk
      OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOxdlc:;;;;;,,,,,,,,,;,,,,,,lxdlcldl;;;;::::cccldxOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOOOOOOOOOOOO000000O00000Oxolc:::;;;;;;;;;;,,,,;,,,,,,:xxol:oxc;;;;;:llcccccoxkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOO00000000000000000000Oxoc:::::;;;,;,,,,,,,,,,,,,,,,',cooddxxc;;;,cxOOxolccccodkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOO000000000000000000OO0OO0Oxolc:::;;;;,;;,,,',,'''',,'','',,,,;:::;,,,,,;okOkxxoccccclxOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOOOOOOOOOOOOOOOOOOOkdlcc:;:;;;;,,,,,,'','','''''''''',,,,,,,,,,,,;,;codxxoc:::cccokOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOOOOOOOOOOOOOOOOOOxolcc:;;;;,,,,,,,,'''''',''''''''',,,'',,,',,,,;,;,;::::::::::ccoxkOOOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOOOOOOOOOOOOOOOOkxolc:::;;;;;,,,'','''''''''''''''''',,'',,,,,,,,;,,;;;;;;:;::::cccldkOOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOOOOOOOOOOOOOOOkdolc:::;;,;;,,,,'','.'''''''''''''''',''''',;,,;,,,,;;;;;;::::::::ccldkOOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOOOOOOOOOOOOOOkxoccc::;;;,,,,,''''''''''''''.''''''''''',,',,',,,,,;;;;;;;::::::::ccccdkOOOOOOOOOOOOOOOOOOOOOOO
      OOOOOOOOOOOOOOOOOOOOOOOxolcc::::;;,,,,'''''''.''''.''.''''''.','',,,,,,,',,,,;;;;;;::;:::::::cclxOOOOOOOOOOOOOOOOOOOOOOO`);
    } else if (answers.wgminterfaces === 'browser') {
      console.info(
      `      KKKKKKKKKKKKKKKKKKKKKKKKKKXXXXXXKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
      KKKKKKKKKKKKKKKKKKKKXKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
      KKKKKKKKKKKKKKXKKKXXXXKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKXXXXXKKKKKKKKKKKKKKKKKKK
      KKKKKKKKKKKKKXXXXXXXXXXKXXKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKK
      KKKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKKK
      KKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKK
      KKKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKK
      KKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKK
      KKKXXXXKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKXXXXXKKK
      KXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKK
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKK
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKK
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKK
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXK0kdlcccodOKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKOd:'......';lx0KXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX0d:..........',;lOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX0kdddoooodddddxxk0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKK00KXXXKKKXXXXKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXK00OxlccdO0koodOKKkolok0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXNNKOOOxc;,;cdxocldk0OdccoxOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXNWXOO00OxolodOOkxxk0K0kxxxOKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXNWNKOOKKKKKKKXXXKKKXXXXXKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXNWNKOOKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXNNNKOOKXXXXXXXXXXXXXXXXKkdoooodxOKXXXXXXXXXXXX0kdoooddk0KXXXXXXXXXXXNNXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXNNNX0O0XXXXXXXXXXXXXX0dlclodxdolodk0XXXXXXXX0olcloxxdollokKXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXNNNX0O0KXXXXXXXXXXXXOlcxO0KOd:::ldddk0KXXXXkclxOKKOo::cloddOXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXNNNKO0KXXXXXXXXXXXKock0KKx,.  .:ldxddxOOOx:cO0K0o.  .':ldxdkKXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXNNNKOOKXXXXXXXXXXkc,oKKX0c.   .;loxkxl;:;',dKKKO;    .codxxl:dKXXXXNNNNXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXNNNX0O0XXXXXXXXXXd'.lKKKKd,....':oo:,,o00x:ox:cxl.....,cdOkc'c0XXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXNNNXKO0XXXXXXXXXXKko:xKKKKxc;'';okl. .:kXKdc,..d0x:,',cd00xldKXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXNNNKO0KXXXXXXXXXXNKdcoO00KK0OO0K0d,...'coc,..:x0K0OOO0K0xco0XXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXNNNX0OKXXXXXXXXXXXXXklcloodxxxxdlcodd:'....,::clodxxxxdlcd0XXXXXXXXNNNNXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXNNNX0O0XXXXXXXXXXXXXXKOdc;,,;:cldOXXXX0kxxk0Kkl:;;;;:lod0XXXXXXXXXXNNNNXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXNNNXKO0KXXXXXXXXXXXXXXXXXK0OO0KXNNXXXXXXXXXXXXXXK0OO0KXXXXXXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXNNNK00KXXXXXXXXXXXXXXXXXXXXXNNXXXXNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNNNXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXNNNX00KXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKd:cdk0XNNXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXKOxdkXNXK00KXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx'...';ldk0KXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXKko:;,cONXX000KXNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKo'.   ...':lx0KXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXOdc;,,,,oKNXKK00KXXXNNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX0c'..   ..';:o0XXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXX0dc:,,,,',oKXXXKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXk:'..   ..,cxKXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXX0dl;',,,'',lOXXXXKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXKd;...    ..cOKXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXko:;,,,,''';okKXXXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXXXXXXOc,,...    .'lOKXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXKxl:;;,,,'''.':ldxkOO00000OOOOOOOOOOOkkkkkkkkkkxxxxxkkkkkkkkOOOOO00KXXXX0dlodo:..    .:kKXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXOxlc:;;,,''.......',,,,,,,,''''''''''''''''''''''''''''''',,;:clood0XXXXKKKXX0d;....;lkKXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXX0kdlc;;,,,''....',,,,'''..............................''''',,,;:lolxKXXXXXXXXXX0o::ox0XXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXX0kdolc;,,,''''':ooc:;,,'''.....................''''',,,;;;:::::cloldKXXXXXXXXXXXK00KXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXX0kdolc:;;,''..';;,,,,'.................................',,;;;:::ccoOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXKOxolc:;;,,''......''...........       .................'',,;;;::co0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXX0kdlc:;;,'''....'''''...............................'..,,,;;;::::oOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXKOxolc:;,,,,;;;;;;,,,''.............................'..,,;;;;::::cokKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXKOxolc::cloollc:;,,''.................................,,;;;;;:::::cdOKXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXKOxoldkOkxolc:;,,''...............,......;oxkxdc',:,,dkkkd:;;:::::clxKXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXKOxOK0Oxdlc:;,,'................cdc,...:OKKXXXKdlo::ONNN0l;;;::::::cd0XXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXKKKKOxolc:;,''................lxxo;'''o0KKKXXX0doc:OXNNKd;;;;::::::coOXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXXKOxdlc:;,''............. ..lkkxo:'coox0KKKXXOcc:;kXNNXx;;;;:::::::cd0XXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXKOxdlc:;,''.............  .,llcc:,.;lc;:oxkxo;.',,okkkko;,;;;;::::::cd0XXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXX0kdoc:;,''............. . ....  ..................''',,,,,,;;;;:::::clkKXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXKkxol:;,,'.............           ..............  ..''''',,,;;;;:::::cco0XXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXOxdlc:;,''.............           .............  .....''',,,,;;;;::::cclkKXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXKkxoc:;,''...............          .....................''',,,,;;;;:::cccxKXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXX0kdlc:;,''..............          ......................'''',,,;;;;::::ccd0XXXXXXXXXXXXXXXXXXXXX`);
    }
  });

// ASCII generated from: https://www.ascii-art-generator.org/
