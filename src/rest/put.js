const axios = require('axios');
// post请求
+async function () {
    const res = await axios.put('http://localhost:3000/posts/2', {
        "id": "2",
        "title": "world",
    });
    console.log(res.data);
}();

