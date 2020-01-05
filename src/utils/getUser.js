export default () => (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) || undefined;

// export function getUserList() {
//     return Promise.resolve(users);
// }
//
// export function getUser(id) {
//
// }
//
// export function addUser(user) {
//
// }
//
// export function editUser(user) {
//
// }