function setUserToLocalStorage(user){
  localStorage.setItem('user', JSON.stringify({
    id: user.id,
    name: user.name
  }));
}

export default setUserToLocalStorage;