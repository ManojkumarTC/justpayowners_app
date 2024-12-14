import JPOapi from "..";

const fetchBlogPosts = async (userId) => {
    const response = await fetch(JPOapi.getBlogPosts.url, {
        method: JPOapi.getBlogPosts.method,
        headers: {
            "Content-Type": "application/json",
            'aUTHORIZATION': 'Bearer ' + userId
        },
    });
    const data = await response.json();
    return data;
}

export default fetchBlogPosts;