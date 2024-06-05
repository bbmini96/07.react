function fetchPosts(userId) {
    let posts = null;
    const suspender = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((result) => {
            setTimeout(() => {
                posts = result;
            }, 3000);
        });

    return {
        read() {
            if (posts === null) {
                throw suspender;
            } else {
                return posts;
            }
        }
    };
};


function fetchUser(userId) {
    let user = null;
    const suspender = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((result) => {
            setTimeout(() => {
                user = result;
            }, 3000);
        });

    return {
        read() {
            if (user === null) {
                throw suspender;    // 미완성된 객체를 throw를 해줘야 한다.
            } else {
                return user;
            }
        }
    };
};

export default function fetchData(userId) {
    return{
        user: fetchUser(userId),
        posts: fetchPosts(userId)
    }

}

