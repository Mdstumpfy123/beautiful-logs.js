const chalk = require('chalk')
let exportsth = [["boot", "[BOOT] ", "magenta"],["warn", "[WARN] ", "yellow"],["success", "[SUCCESS] ","green"],["info", "[INFO] ", "blue"],["err", "[ERROR] ", "red"],["command", "[COMMAND] ", "cyan"]]

exportsth.map(x=> {
    module.exports[x[0]] = function(msg) {
        console.log(chalk[x[2]](x[1]) + msg)
    }
})