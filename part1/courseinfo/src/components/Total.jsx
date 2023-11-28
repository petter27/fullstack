import React from "react";

const Total = ({course}) => {
    let sumTotal = 0;
    course.parts.forEach(item => sumTotal += item.exercises );
    return (
        <p>Number of exercises {sumTotal}</p>
     );
}

export default Total;