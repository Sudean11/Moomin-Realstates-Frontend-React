const getTokenFromLocalStorage=async ()=> {
    // Retrieve the token from localStorage
    const token = await localStorage.getItem('auth');
    return token;
  }

  export const authService = {
    getTokenFromLocalStorage
  }