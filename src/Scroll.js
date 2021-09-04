import React from 'react'; 

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'Scroll', border:'5px solid lightgreen', height: '500px'}} >
            {props.children}
        </div>
    ); 
}; 

export default Scroll;  