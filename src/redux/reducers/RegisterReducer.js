
let regState = {
    fullName: null,
    email: null,
    password: null,
    confirmPassword: null,
    breed: null,
    gender: null,
    birthday: null,
    profile_img: null ,
    cover_img : null
}

const RegisterReducer = (state = regState, action) => {

    switch (action.type) {
        case "RESET":
            return regState;

        case "CONTINUE":
            // console.log( action );
            return action.payload
    }
    return state;
}

export default RegisterReducer; 
