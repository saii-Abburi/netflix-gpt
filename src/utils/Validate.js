


export const checkValidData = (email, password, name)=>{
    const IsEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const IsPassWordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password);
    const IsName = /^[a-zA-Z\s]+$/.test(name);

    if(!IsEmailValid) return "Email Is Not Valid";
    if(!IsPassWordValid) return "Password Is Not Valid Use capitals , numbers , special characters";
    if(!IsName) return "Name Should be Characters";

    return null;

};