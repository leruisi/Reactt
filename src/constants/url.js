
const baseUrl = "https://jsonplaceholder.typicode.com"

const todos ='/todos'
const albums = '/albums'
const comments='comments'
const posts = '/posts'

const urls= {
    albums,
    todos,
    comments,
    posts: {
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseUrl,
    urls
}