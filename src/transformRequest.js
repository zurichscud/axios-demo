const axios = require('axios');
+async function () {
    const res = await axios('http://localhost:3000/posts', {
        method: 'post',
        data: {
            id: 3,
            title: 'My First Post',
        },
        transformRequest: [
            (data, headers) => {
                data.title = 'ces'
                return JSON.stringify(data)
            }
        ]

    });
    console.log(res.data);
}();