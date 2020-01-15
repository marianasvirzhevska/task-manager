export default (id, arr) => {
	const index = arr.findIndex((item) => item.id === id);
	const newArr = [...arr];

	newArr.splice(index, 1);

	return newArr;
}
