import setUser from './setUser'

export default (user) => {
  if (user) {
    setUser(user);
    location.href = '/'
  }
}