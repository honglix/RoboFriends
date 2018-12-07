import React from 'react'

const Card = ({name, email, id}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-10">
            <img alt = "robot" src ={`https://robohash.org/${id}?200x200`}></img>
            <div>
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
        </div>
    );
};

export default Card;