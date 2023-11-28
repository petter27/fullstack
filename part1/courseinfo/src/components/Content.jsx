import React from "react";
import Part from "./Part";

const Content = ({course}) => {
    return (
        <div>
            {
                course.parts.map(item =>{
                    return (
                        <Part key={item.name} part={item} />
                    );
                })
            }
        </div>
     );
}

export default Content;