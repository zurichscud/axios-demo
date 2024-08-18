import {getComments,createComment} from "./api/comments.js";
! async function (){
    await createComment({
        id: "3",
        title: "Hello",
        views: 900

    })
    const comments = await getComments();
    console.log(comments.data);
}()