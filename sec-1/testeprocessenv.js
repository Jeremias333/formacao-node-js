console.log("Hello World");

var showSite = (process.argv.slice(2) == 'true') || false;
const site = "pickcells.bio";

console.log(showSite)

if(showSite){
	console.log(site);
}
