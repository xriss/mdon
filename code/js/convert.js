/*

(C) Kriss@XIXs.com 2023 and released under the MIT license.

See https://github.com/xriss/mdon for full notice.

*/

const convert=exports;

const pfs=require("fs/promises")


const ls=function(a) { console.log(util.inspect(a,{depth:null})); }



convert.to_json=async function(ifname,ofname)
{
	let itext=await pfs.readFile(ifname)
	let otext=""
	await pfs.writeFile(ofname,otext)
}


convert.to_markdown=async function(ifname,ofname)
{
	let itext=await pfs.readFile(ifname)
	let otext=""
	await pfs.writeFile(ofname,otext)
}
