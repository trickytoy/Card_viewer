import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p2>{email}</p2>
            </div>
        </div>
    );
}

export default Card;