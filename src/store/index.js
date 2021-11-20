import { createStore } from "vuex"

export default createStore({
    state: {
        postList: [
            {
                id: 1,
                create_time: "10/20/2021 17:00:11",
                post_heading: "Burning sun",
                image: require("/res/images/picture1.jpg"),
            },
            {
                id: 2,
                create_time: "10/20/2021 17:12:25",
                post_heading: "Springfield",
                image: "",
            },
            {
                id: 3,
                create_time: "10/20/2021 17:33:00",
                post_heading: "Classic melody",
                image: "",
            },
            {
                id: 4,
                create_time: "10/20/2021 18:03:54",
                post_heading: "Christmas tree",
                image: "",
            },
            {
                id: 5,
                create_time: "10/20/2021 18:34:25",
                post_heading: "Gameplay",
                image: "",
            },
            {
                id: 6,
                create_time: "10/20/2021 18:46:56",
                post_heading: "Glow Flow",
                image: "",
            },
            {
                id: 7,
                create_time: "10/20/2021 19:37:36",
                post_heading: "Janno day",
                image: "",
            },
            {
                id: 8,
                create_time: "10/20/2021 19:38:42",
                post_heading: "Present",
                image: "",
            },
            {
                id: 9,
                create_time: "10/20/2021 20:10:39",
                post_heading: "Bow",
                image: "",
            },
            {
                id: 10,
                create_time: "10/20/2021 20:32:44",
                post_heading: "Streets",
                image: "",
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
})

/* import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        postList: [
            {
                id: 1,
                create_time: "10/20/2021 17:00:11",
                post_heading: "Burning sun",
                image: "",
            },
            {
                id: 2,
                create_time: "10/20/2021 17:12:25",
                post_heading: "Springfield",
                image: "",
            },
            {
                id: 3,
                create_time: "10/20/2021 17:33:00",
                post_heading: "Classic melody",
                image: "",
            },
            {
                id: 4,
                create_time: "10/20/2021 18:03:54",
                post_heading: "Christmas tree",
                image: "",
            },
            {
                id: 5,
                create_time: "10/20/2021 18:34:25",
                post_heading: "Gameplay",
                image: "",
            },
            {
                id: 6,
                create_time: "10/20/2021 18:46:56",
                post_heading: "Glow Flow",
                image: "",
            },
            {
                id: 7,
                create_time: "10/20/2021 19:37:36",
                post_heading: "Janno day",
                image: "",
            },
            {
                id: 8,
                create_time: "10/20/2021 19:38:42",
                post_heading: "Present",
                image: "",
            },
            {
                id: 9,
                create_time: "10/20/2021 20:10:39",
                post_heading: "Bow",
                image: "",
            },
            {
                id: 10,
                create_time: "10/20/2021 20:32:44",
                post_heading: "Streets",
                image: "",
            },
        ],
    },
})*/
