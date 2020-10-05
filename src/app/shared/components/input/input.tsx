import React from 'react';
import './styles.scss';

interface Props {
    labelText: string,
    value: string,
    onTextChange: (value: string) => void,
    error?: boolean,
    errorText?: string,
    inputStyle?: string,
    containerStyle?: string,
    labelStyle?: string,
    type?: string,
    maxLength?: number,
    minLength?: number
}

const Input = ({
    labelText,
    value,
    onTextChange,
    error,
    errorText,
    inputStyle,
    containerStyle,
    labelStyle,
    type,
    maxLength,
    minLength
}: Props) => {
    return (
        <div className={containerStyle ? `input-container ${containerStyle}` : "input-container"}>
            <div className="label-container">
                <label style={error ? { color: '#e66465' } : {}} className={labelStyle ? `label ${labelStyle}` : 'label'}>{labelText}</label>
                {!error ? null : <span className="error">{errorText}</span>}
            </div>
            <input
                style={error ? { borderBottomColor: '#e66465' } : {}}
                maxLength={maxLength}
                minLength={minLength}
                value={value}
                onChange={e => onTextChange(e.target.value)}
                className={inputStyle ? `input ${inputStyle}` : 'input'}
                type={type || "text"}
            />
        </div>
    )
}

export default Input;