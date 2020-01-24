export function getUniqueId(){
	let date = Date.now();
	return date.toString(36)
}
