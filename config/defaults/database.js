module.exports = {
    // The default database to use if none is mentioned
    name: 'indexical_projects',
    // Minimal number of connections in the pool
    buffer: 50,
    // Maximum number of connections in the pool
    max: 1000,
    // The number of seconds for a connection to be opened
    timeout: 20,
    // Wait time before reconnecting in case of an error (in ms), default 1000
    timeoutError: 1000,
    // How long the pool keep a connection that hasn't been used (in ms)
    timeoutGb: 60*60*1000,
    // The maximum timeout before trying to reconnect is 2^maxExponent x timeoutError, default 6 (~60 seconds for the longest wait)
    maxExponent: 6
};
