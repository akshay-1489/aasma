var arr = ['Jaipur','Jodhpur','Ajmer'];
var censoredarr=[];
function restaurants(city)
{
	for(idx in arr)
		city = city.replace(arr[idx],"*****");
	
	for(idm in censoredarr)
		city = city.replace(censoredarr[idm],"&&&&&");
	
	return city;
}
function addplaces(city)
{
	censoredarr.push(city);
}
function getplaces()
{
	arr.concat(censoredarr);
}
exports.restaurants = restaurants;
exports.addplaces = addplaces;
exports.getplaces = getplaces;