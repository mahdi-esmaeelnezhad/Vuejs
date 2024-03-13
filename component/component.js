// Vue.component('div-user',{
//     props :["userName"],
// data(){
//     return{
//         add : 0,
//     }
// },
// // template :'<button @click="add++">{{add}}</button>',
// template : '<div>{{userName}}</div>'
// })

Vue.component('div-user',{
props : ['name' , 'age'],
template : `
<div>
<slot name="title"></slot>
<p>ali</p>
<h2>{{name}} {{age}}</h2>
<slot name="userName"></slot>
</div>`
})

let box = {
    template : `
    <h2>mahdi</h2>
    `
}

// Vue.component('blog-post', {
//     props: ['title'],
//     template: '<h3>{{ title }}</h3>'
//   })

const vm = new Vue({
    el : "#app",
    data :{
        message : "mahdi",
        user : [
        {
            name : "mahdi",
            age : 22
        },
        {
            name : "ali",
            age : 20
        },
        {
            name : "sara",
            age : 34
        }
    ]
    }
})
const vm2 = new Vue({
    el:"#app2",
    components : {
        box
    }
})