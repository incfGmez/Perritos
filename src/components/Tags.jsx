import React from "react";
import { Badge } from "react-bootstrap";

export const Tags = (props) =>{
    const {color, texto} = props;
    return(
        <div>
            <Badge bg={color} className="estilosBadge">
                {texto}
            </Badge>
        </div>
    )
}
export default Tags;