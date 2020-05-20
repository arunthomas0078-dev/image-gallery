
export const validateCredentials = async(cred) => {
    if(cred.userName === "test" && cred.password === "test"){
        return true;
      }
      return false;
}