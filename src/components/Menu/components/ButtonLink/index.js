import React from 'react';

function ButtonLink(props) {
    
    console.log(props);
    return (
        <a href={props.href} className={props.clanssName}>
            Novo Vídeo
        </a>
    );
}

export default ButtonLink;