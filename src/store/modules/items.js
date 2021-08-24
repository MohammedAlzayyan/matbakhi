import axios from 'axios';


const state = {
    categories: [],
    itemsRecipes: [],
    users: [],
    logged: false,
 };
 
 const getters = {
    allCategories: (state) => state.categories,
    categoryID: (state) => state.categories.id,
    allItemsRecipes: (state) => state.itemsRecipes,
    allUsers: (state) => state.users,
 };


 
 const actions = {

    async fetchUser({commit}){
        const response = await axios.get('http://localhost:3000/users')
        // const response = await axios.get('http://localhost:3000/users')
        // const post = await response.json();
        
        commit('setUsers',response.data);
    },
    async addUser(context ,data){
        const response = await axios.post('http://localhost:3000/users' ,data)
        response.headers({'Content-Type': 'application/json'})
    },

    async searchUser(context ,data){
        const response = await axios.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
        console.log(response);

        if(response.status==200 && response.data.length > 0){
            localStorage.setItem("user_info", JSON.stringify(response.data[0]))
            context.commit("loggedUser")
            console.log("response");
        }
    },

    async fetchCategory({commit}){
        const response = await axios.get('http://localhost:3000/categories')
        
        commit('setCategories',response.data);
    },
    async fetchItemsRecipes({commit}){
        const response = await axios.get('http://localhost:3000/itemsRecipes')
        
        commit('setItemsRecipes',response.data);
    },
    async addRecipe(context ,data){
       await axios.post('http://localhost:3000/itemsRecipes' ,data)
        
    },

    async addItemIdToCategory(context , data){ 
        console.log(data.name);
        const response = await axios.get(`http://localhost:3000/itemsRecipes/?name=${data.name}`)
        let item = response.data[0]
        const responseCa = await axios.get(`http://localhost:3000/categories/?id=${item.category_id}`)
        console.log('responseCa.data');
        let category = responseCa.data
        category[0].items_ids.push(item.id)
        
        let dataa = {items_ids:category[0].items_ids , name: category[0].name,imageURL:category[0].imageURL }

        await axios.put(`http://localhost:3000/categories/${category[0].id}` ,  dataa)


    },

    async filterRecipe(context ,data){
        const response = await axios.get(`http://localhost:3000/itemsRecipes?id=${data.id}`)

        if(response.status==200 && response.data.length > 0){
            localStorage.setItem("user-info", JSON.stringify(response.data[0]))
            context.commit("loggedUser")
        }
    },
   
 };
 
 const mutations = {
    setUsers: (state, users) => (state.users = users),
    setCategories: (state, categories) => (state.categories = categories),
    setItemsRecipes: (state, itemsRecipes) => (state.itemsRecipes = itemsRecipes),
    loggedUser: state => state.logged = true
 };


export default {
    namespaced:true ,
    state,
    getters,
    actions,
    mutations,
}