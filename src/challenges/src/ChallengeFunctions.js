const isPalindromeFunc = (str) => {

    let cleanStr = /^[a-zA-Z]+$/.test(str.trim().toLowerCase());
    
    if(!cleanStr) return false

    let charArr = str.trim().toLowerCase().split('');

    for(let c of charArr){
        if( c !== charArr.pop()) return false 
    }

    return true;
}
export { isPalindromeFunc };

const reorderingArrays = (orderType) => {
    const people = [
		{
			name: "Bob",
			age: 29
		},
		{
			name: "Alice",
			age: 42,
		},
		{
			name: "Greg",
			age: 23
		},
		{
			name: "Jean",
			age: 50
		}
	];
    const orderBy = (prop, order) => {
        let temp = [...people];
        let arr = temp.sort((a, b) => {
            if(a[prop] < b[prop]){
                return order === 'asc' ? -1 : 1
            }
            if(a[prop] > b[prop]){
                return order === 'asc' ? 1 : -1
            }
            return 0;
        });
        return arr;
    }

    switch(orderType){
        case 'ageDesc':
            let ageDesc = orderBy('age', 'desc');
            return ageDesc;
        case 'alphabetic':
            let alphabetic = orderBy('name', 'asc');
            return alphabetic;
        case 'agesArray':
            let agesArray = people.map((per) => per.age);
            return agesArray;
    }
}
export { reorderingArrays };