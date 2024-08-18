import request from "../utils/request.js";
function getComments() {
    return request.get('/comments')
}
function createComment(comment) {
    return request.post('/comments', comment)
}
export {getComments, createComment}