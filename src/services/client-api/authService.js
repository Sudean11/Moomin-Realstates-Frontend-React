const getTokenFromLocalStorage=async ()=> {
    // Retrieve the token from localStorage
    const token = await localStorage.getItem('auth');
    return token;
  }

  const getEmailFromLocalStorage=async ()=> {
    // Retrieve the token from localStorage
    const email = await localStorage.getItem('email');
    return email;
  }

  const getRoleFromLocalStorage=async ()=> {
    // Retrieve the token from localStorage
    const role = await localStorage.getItem('role');
    return role;
  }

  const logout = async () =>{
    await localStorage.clear();
  }

  export const authService = {
    getTokenFromLocalStorage,
    getEmailFromLocalStorage,
    getRoleFromLocalStorage,
    logout
  }