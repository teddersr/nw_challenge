import React, { useState } from 'react';

const ChallengeOne = () => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [isPal, setIsPalindrome] = useState(false);

    const isPalindrome = (str) => {

        let cleanStr = /^[a-zA-Z]+$/.test(str.trim().toLowerCase());

        if(!cleanStr) {
            setError('Your entry may contain only letters');
            return setIsPalindrome(false);
        }

        let charArr = str.trim().toLowerCase().split('');

        for(let c of charArr){
            if( c !== charArr.pop()) {
                return setIsPalindrome(false);
            } 
        }

        setError(null);
        return setIsPalindrome(true);
    }

    return(
    <div className="challengeOne">
        <div className="challengeOne__heading">Palindrome Checker</div>
        <input 
            className="challengeOne__input" 
            type="text" 
            value={input}
            placeholder="insert a test word"
            onChange={(e) => {
                setInput(e.target.value);
                setIsPalindrome(null);
                setError(null);
            }}
        />
        <button 
            className="challengeOne__button"
            onClick={() => {
                isPalindrome(input);
            }}
        >Submit
        </button>
        <div className="challengeOne__result">
            {input && isPal != null && error === null && JSON.stringify(isPal)}
        </div>
        <div className="challengeOne__errMessage">{error}</div>
    </div>
    );
};
export default ChallengeOne;