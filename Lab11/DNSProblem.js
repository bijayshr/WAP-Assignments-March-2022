const dns = require('dns');

const options = {
    family:4,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
    ttl: true
};

dns.lookup('www.miu.edu', options,
    (err, address, family) => {
        if(err){
            throw err;
        }
        console.log('address: %j family: IPV%s', address, family)
    });

//ALTERNATIVELY, WE CAN ALSO DO THIS
dns.resolve4('www.miu.edu', options, (err, address) => {
    if(err) throw err;
    console.log('address: %j', address);
})