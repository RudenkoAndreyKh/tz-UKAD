import React from 'react';
import './styles.scss';

interface Props {
    text: string,
    disabled?: boolean,
    onClick: () => void,
    containerStyle?: string,
    buttonStyle?: string
}

const Button = ({ text, disabled, onClick, buttonStyle, containerStyle }: Props) => {
    return (
        <div className={containerStyle ? `button-container ${containerStyle}` : "button-container"}>
            <button className={buttonStyle ? `button ${containerStyle}` : "button"} disabled={disabled} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button;