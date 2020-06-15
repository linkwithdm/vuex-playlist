import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        products: [{
                id: 1,
                name: 'Banana',
                price: 10
            },
            {
                id: 2,
                name: 'Apple',
                price: 20
            },
            {
                id: 3,
                name: 'Mango',
                price: 15
            }, {
                id: 4,
                name: 'Orange',
                price: 15
            }
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function() {
                context.commit('reducePrice', payload)
            }, 5000)
        }
    }
})