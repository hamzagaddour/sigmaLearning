module.exports.signUpErrors = (err) => {
    let errors = {  email: "", password: "" };
  
    if (err.message.includes("email")) errors.email = "Email incorrect";
  
    if (err.message.includes("password"))
      errors.password = "Le mot de passe doit faire 6 caracteres minimum";
 
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
      errors.email = "Cet email est deja  enregistree";
  
    return errors;
  };
  
  module.exports.signInErrors = (err) => {
    let errors = { email: "", password: "" };
  
    if (err.message.includes("email")) errors.email = "Email inconnu";
  
    if (err.message.includes("password"))
      errors.password = "Le mot de passe ne correspond pas";
  
    return errors;
  };
  
  module.exports.uploadErrors = (err) => {
    let errors = { format: "", maxSize: "" };
  
    if (err.message.includes("invalid file"))
      errors.format = "Format incompatabile";
  
    if (err.message.includes("max size"))
      errors.maxSize = "Le fichier depasse 500ko";
  
    return errors;
  };