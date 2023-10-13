module.exports = {
    apps : [{
      name: 'NextJS Apps',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000', //running on port 3000
      cwd: "./apps/nextapp",
      instances: 1,
      watch: false,
      env: {
          ...
      }
    }]
  };