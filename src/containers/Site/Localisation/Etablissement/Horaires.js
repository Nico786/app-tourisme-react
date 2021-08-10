import React from 'react';

const Horaires = (props) =>{
    let content = props.horaires.map((horaires,index)=>{
        return <li key={index}>Du {horaires.du} au {horaires.au} de {horaires.heures[0].de} à {horaires.heures[0].a}</li>
    })

    return(
        <>
        <ul>
            {content}
        </ul>
        </>
    )
    
}

export default Horaires;