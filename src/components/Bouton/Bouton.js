import React from 'react';

const Bouton = (props) => {
    let cssBtn = `btn ${props.typeBtn} m-1`
    return <button
        className={cssBtn}
        onClick={props.clic}
    >
        {props.children}
    </button>
}

export default Bouton;