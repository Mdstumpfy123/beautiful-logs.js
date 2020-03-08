> A simple logger with colors!

## Example
```javascript
const logger = require("beautiful-logs.js")

// [BOOT] Booted!
logger.boot("Booted!")

// [WARN] Self-destruct initated.
logger.warn("Self-destruct initiated.")

// [SUCCESS] Success! Everything successfully ran!
logger.success("Success! Everything successfully ran!")

// [ERROR] Something went wrong!
logger.err("Something went wrong!")

// [INFO] Hey! You might want to edit your code!
logger.info("Hey! You might want to edit your code!")

// [COMMAND] Commanded to say 'yes'.
logger.command("Commanded to say 'yes'.")
```

Thanks to Fire for cleaning up my coding mess in the logger.js file.