import React, { useState } from "react";
import "boxicons";

export default function TaskCard(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="task-card">
            <p className="task-description">{props.task}</p>
            <box-icon
                onClick={props.onDelete}
                name="checkbox-checked"></box-icon>
        </div>
    );
}
