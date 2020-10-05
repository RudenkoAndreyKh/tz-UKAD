const isLoginValid = (value: string) => {
    return value.length >= 6 && value.length <= 100;
}

const isPasswordValid = (value: string) => {
    return /^(?=.*\d).{7,}/.test(value);
}

export {
    isLoginValid,
    isPasswordValid
}