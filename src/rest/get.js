const axios = require('axios');
//无参get请求
+async function () {
    const res = await axios.get('http://localhost:3000/posts');
    console.log(res.data);
}();

// 有参get请求
+async function () {
    const res = await axios.get('http://localhost:3000/posts', {
        params: {
            id: 1,
            title: 'My First Post',
        }
    });
    console.log(res.data);
}();

