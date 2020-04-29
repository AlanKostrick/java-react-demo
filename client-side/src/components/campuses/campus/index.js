import React from 'react';

const Campus = ({ campus }) => {
    const { name, bootcamps } = campus;

    return (
        <>
            <h3>{name}</h3>
            <ul>
                {bootcamps.map(bootcamp => {
                    return (
                        <li>{bootcamp.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Campus;
