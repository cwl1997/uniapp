 export function getkey(){
	 var crypto = require('crypto');
	 
	 var secretId  = 'AKIDb6CD6urr2zjKjvrYGjDTXUCLEsHAfJQF',
	     secretKey = 'PaaKK5aZJo8CbonX0DYprdAa9h04tUxy',
	     appid     = '1300568222',
	     pexpired  = 86400,
	     userid   = 0;
	 
	 var now = parseInt(Date.now() / 1000),
	     rdm = parseInt(Math.random() * Math.pow(2, 32)),
	     plainText = 'a=' + appid + '&k=' + secretId + '&e=' + (now+pexpired) + '&t=' + now + '&r=' + rdm + userid + '&f=',
	       data = new Buffer(plainText,'utf8'),
	     res = crypto.createHmac('sha1',secretKey).update(data).digest(),
	     bin = Buffer.concat([res,data]);
	 
	 var sign = bin.toString('base64');
	 return sign 
 }