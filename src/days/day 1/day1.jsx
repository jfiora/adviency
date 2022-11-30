import { useState } from 'react';
import './day1.css';

function Day1() {
    const [gifts, setGifts] = useState(['Socks', 'Candies', 'More socks']);

    return (
        <div className='App'>
            <h1>Gifts:</h1>
            <ul>
                {gifts
                    ? gifts.map((gift, idx) => {
                          return <li key={idx}>{gift}</li>;
                      })
                    : null}
            </ul>
        </div>
    );
}

export default Day1;
