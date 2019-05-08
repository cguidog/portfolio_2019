import React from 'react';

const Details = (props) => {
    return (
        <ul>
        {props.description.map((descript)=> {
            return (
                <li key={props.description.indexOf(descript)}>{descript}</li>
            )
        })}
        </ul>
    )
}

export default Details;