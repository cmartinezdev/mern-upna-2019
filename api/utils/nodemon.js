const killApp = () => process.kill(process.pid, 'SIGUSR2')

module.exports = { killApp }
