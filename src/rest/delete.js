const axios = require('axios');
// post请求
+ async function () {
    const res = await axios.delete('http://localhost:3000/posts/3');
    console.log(res.data);
}();

