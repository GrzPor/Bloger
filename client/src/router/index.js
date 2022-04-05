import Vue from 'vue';
import VueRouter from 'vue-router';
import PostsList from '../views/PostsList';
import CreatePost from '../views/CreatePost';
import DetailPost from '../views/DetailPost';
import EditPost from '../views/EditPost';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/posts',
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsList,
        },
        {
            path: '/posts/create',
            name: 'create-post',
            component: CreatePost,
        },
        {
            path: '/post/:id',
            name: 'single-post',
            component: DetailPost,
            props: true,
        },
        {
            path: '/post/edit/:id',
            name: 'editPost',
            component: EditPost,
            props: true,
        },
    ],
});
