import React from 'react';

const Details = (props) => {
    return (
        <ul>
        {props.description.map((descript)=> {
            return (
                <li key={props.description.indexOf(descript)} dangerouslySetInnerHTML={{ __html: descript}}/>
            )
        })}
        </ul>
    )
}

export default Details;