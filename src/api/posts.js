import request from "./utils/request";

function getPostsById(id) {
    return request.get(`/posts/${id}`);

}
function getPosts(){
    return request.get('/posts');
}
export {getPostsById, getPosts}