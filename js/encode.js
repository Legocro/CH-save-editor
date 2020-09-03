function getHash(string) {
    let salt = 'af0ik392jrmt0nsfdghy0'
    let charaters = string.split();
    charaters.sort();
    let sortedCharaters = charaters.join();
    return CryptoJS.MD5(sortedCharaters + salt);
}

function decodeOld(data) {
    old = true;
    let result = data.split("Fe12NAfA3R6z4k0z");
    let txt = "";
    for (var i = 0; i < result[0].length; i += 2)
        txt += result[0][i];
    data = JSON.parse(atob(txt));
    data.type = "old";
    console.log(data);
    return data
}

function decodeNew(data) {
    old = false;
	let result = data.slice(32)
	data = pako.inflate(atob(result), {to: 'string' });
	data = JSON.parse(data);
	data.ow = "b3ac65fafc8c87215bd5ea573a8c5c72";
	data.type = "new"
	let tag = "This code is written and owned by Marin Legović";
	console.log(data);
	return data;

}

function encodeOld(data) {
	data = red ? wipe(data) : data;
	console.log(data)
	delete data.type;
	data.account = {
		flag: true,
		name: "Clicker Heroes save editor",
		author: {
			discord: "Legofury#9425",
			reddit: "/u/Legocro",
			github: "/Legocro"
		},
		note: "This is added by integration and cannot be removed"
	};
	data = JSON.stringify(data);
    let letters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let newdata = btoa(data);
    let newsprinkle = "";
    for (var x = 0; x < newdata.length; x++) {
        newsprinkle += newdata[x] + letters[Math.floor(Math.random() * letters.length)];
    }
    console.log(newsprinkle.length);
    let encoded = newsprinkle + "Fe12NAfA3R6z4k0z" + getHash(newdata);
    return encoded;
}

function encodeNew(data) {
	data = red ? wipe(data) : data;
	console.log(data);
	delete data.type
	data.account = {
		flag: true,
		name: "Clicker Heroes save editor™",
		author: {
			discord: "Legofury#9425",
			reddit: "/u/Legocro",
			github: "/Legocro"
		},
		note: "This is added by integration and cannot be removed"
	};
	let hash = "7a990d405d2c6fb93aa8fbb0ec1a3b23";
	data = JSON.stringify(data);
	let encodedData = pako.deflate(data, {to: 'string'});
	return hash + btoa(encodedData);

}


function decode(data) {
	if (data.indexOf("Fe12NAfA3R6z4k0z") == -1) return decodeNew(data);
	return decodeOld(data);
}

function encode(data){
	data = typeof data == "object" ? data : JSON.parse(data);
	if (data.type == "old") return encodeOld(data);
		return encodeNew(data);
}

function wipe(data) {
    data.email = "";
    data.passwordHash = "";
    data.prevLoginTimestamp = 0;
    data.account = null;
    data.accountId = 0;
    data.loginValidated = "false";
    data.uniqueId = "";
    console.log("wiped");
    return data;
}
