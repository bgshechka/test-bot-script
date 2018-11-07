const wow = require('bgshechka-test-package');

const t = setInterval(() => {
  console.log(`ping from git bot with uuid ${process.env.UUID}. Module bgshechka-test-package ${wow(process.env.UUID)}`);
}, 3000);
