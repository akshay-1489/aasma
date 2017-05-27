var arr = ['Jaipur','Jodhpur','Ajmer'];
var censoredarr=[];
function restaurants(str)
{
	for(idx in arr)
		str = str.replace(arr[idx],"*****");
	
	for(idm in censoredarr)
		str = str.replace(censoredarr[idm],"&&&&&");
	
	return str;
}
function addplaces(city)
{
	censoredarr.push(city);
}
function getplaces()
{
	return arr.concat(censoredarr);
}
exports.restaurants = restaurants;
exports.addplaces = addplaces;
exports.getplaces = getplaces;