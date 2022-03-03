import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'
import DetailPost from '../components/DetailPost'
import EditPost from '../components/EditPost'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: "/",
            redirect: "/posts"
        },
        {
            path: "/posts",
            name: "posts", 
            component: Posts
        },
        {
            path: "/posts/create",
            name: "create-post",
            component: CreatePost,
        },
        {
            path: "/post/:id",
            name: "single-post",
            component: DetailPost,
            props: true,
        },
        {
            path: "/post/edit/:id",
            name: "editPost",
            component: EditPost,
            props: true,
        }
    ]
})
