export default (arr) => {
	const getRandom = (min, max) =>{
		return Math.ceil(Math.random() * (max - min) + min);
	};

	function generateId(){
		let id = getRandom(0, arr.length + 1);
		if (arr && arr.find( item => item.id === id)){
			id = generateId();
		} else return id;
	}

	let id = generateId();
	return (id);
};
