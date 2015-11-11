
module.exports = new Promise(function(resolve) {
    // TODO include etcd support, probably through etcd-simple-config
    resolve(require('./defaults'));
});
