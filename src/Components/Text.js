import { React } from "react";

function Text(props){

    return(
        <div>
            <h2>Text components</h2>
            <p>{props.data}</p>
        
    </div>

    );
}

export default Text;