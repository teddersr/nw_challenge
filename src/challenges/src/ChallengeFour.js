import React, { useState } from 'react';

const ChallengeFour = () => {
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

    const [data, setData] = useState([...people]);

    return(
        <div className="challengeFour">
            <div className="challengeFour__heading">Ordering arrays</div>
            <div className="challengeFour__button-group">
                <div className="challengeFour__button-group-text">Order:</div>
                <button className="challengeFour__button-group-button" onClick={() => {
                    let arr = people.sort((a, b) => {
                        if ( a.age < b.age ){
                            return 1;
                        }
                        if ( a.age > b.age ){
                            return -1;
                        }
                        return 0;
                    })
                    setData([...arr]);
                }}>Descending age</button>
                <button className="challengeFour__button-group-button" onClick={() => {
                    let arr = people.sort((a, b) => {
                        if ( a.name < b.name ){
                            return -1;
                        }
                        if ( a.name > b.name ){
                            return 1;
                        }
                        return 0;
                    })
                    setData([...arr]);
                }}>Alphabetically</button>
                <button className="challengeFour__button-group-button" onClick={() => setData(people)}>Reset</button>
            </div>
            <div >
                <ul className="challengeFour__list">
                    {data && data.map((person, i) => {
                        return(
                            <li className="challengeFour__list-item" key={i}>Name: {person.name}, Age: {person.age}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
export default ChallengeFour;