import axios from 'axios';

const $api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export function getPosts() {
    return $api.get('/posts');
}

export function getPost(id) {
    return $api.get(`/posts/${id}`);
}

export function createPost(post) {
    return $api.post('/posts', post);
}

export function deletePost(id) {
    return $api.delete(`/posts/${id}`);
}

export function updatePost(id, post) {
    return $api.put(`/posts/${id}`, post);
}
