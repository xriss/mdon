/*

(C) Kriss@XIXs.com 2023 and released under the MIT license.

See https://github.com/xriss/mdon for full notice.

*/

const cmd_convert=exports;

const pfs=require("fs").promises


const ls=function(a) { console.log(util.inspect(a,{depth:null})); }


cmd_convert.run=async function(argv)
{

	let ifname=argv._[1]
	let ofname=argv._[2]
	let intojson=true
	
	if( ifname ) // need an input
	{
		if( ifname.endsWith(".json") )
		{
			intojson=false
		}
		if( argv.markdown )
		{
			intojson=false
		}
		if( argv.json )
		{
			intojson=true
		}

		if( ! ofname ) // auto outname
		{
			if( intojson )
			{
				ofname=ifname+".json"
			}
			else
			{
				ofname=ifname+".md"
			}
		}
		
		if(intojson)
		{
			console.log(`
Converting ${ifname} to json [${ofname}]
`)
		}
		else
		{
			console.log(`
Converting ${ifname} to markdown [${ofname}]
`)
		}
	}


	console.log(
`

>	mdon convert infilename.json [outfilename.md]
>	mdon convert infilename.txt --markdown [outfilename.md]

Convert json to markdown.


>	mdon convert infilename.md [outfilename.json]
>	mdon convert infilename.txt --json [outfilename.json]

Convert markdown to json.

`)



}
