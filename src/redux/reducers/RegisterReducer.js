
let regState = {
        fullName: 'me',
        email: 'mae@gmail.com',
        password: 'pass123',
        confirmPassword: 'pass123',
        type: "cat",
        gender: 'female',
        birthday: '2021-12-12'
}

const RegisterReducer = (state = regState, action ) => {
    return state;
}

export default RegisterReducer; 