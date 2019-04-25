module.exports = {
  apps: [{
    name: 'SDC',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-184-72-113-36.compute-1.amazonaws.com',
      key: '~/.ssh/SDC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/most-amaziin/Jarrod-Proxy.git',
      path: '/home/ubuntu/Jarrod-Proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}