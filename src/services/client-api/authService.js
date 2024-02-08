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

  export const authService = {
    getTokenFromLocalStorage,
    getEmailFromLocalStorage
  }