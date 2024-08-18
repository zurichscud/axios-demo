const axios = require('axios');
// post请求
+async function () {
    const res = await axios.post('http://localhost:3000/posts', {
        id: 3,
        title: 'My First Post',
    });
    console.log(res.data);
}();

