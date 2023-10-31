const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users';
const  userDetails = '/user-details'


const urls = {
    users,
    userDetails:{
        byId:(userId)=>`${users}/${userId}`
    },
    posts: {
        byUserId: (userId) => `${userDetails}/${userId}/posts`
    }
}

export {
    urls,
    baseURL
}