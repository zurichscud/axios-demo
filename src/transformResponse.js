const axios = require('axios');
+async function () {
    const res = await axios('http://localhost:3000/posts', {
        method: 'get',
        transformResponse: [
            (data) => {
                return 'hello world'
            }
        ]
    });
    console.log(res.data);
}();