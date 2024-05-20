if (!process.env.npm_config_global && !process.env.yarn_global) {
  console.error('This script can only be run as a global installation.');
  process.exit(1);
}
