function getHash(string) {
    let salt = 'af0ik392jrmt0nsfdghy0'
    let charaters = string.split();
    charaters.sort();
    let sortedCharaters = charaters.join();
    return CryptoJS.MD5(sortedCharaters + salt);
}

function decode(data) {
    old = false;
	let result = data.slice(32)
	let decodedData = atob(result);
	let charData = decodedData.split("").map(x => x.charCodeAt(0));
	let binData = new Uint8Array(charData);
	data = pako.inflateRaw(binData, {to: 'string' });
	data = JSON.parse(data);
	return data;
}

function encode(data) {
	let json = JSON.stringify(data);
	let binData = pako.deflateRaw(json);
	let encodedData = btoa(String.fromCharCode.apply(null, binData));
	return "7e8bb5a89f2842ac4af01b3b7e228592" + encodedData;
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
