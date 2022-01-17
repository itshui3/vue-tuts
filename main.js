const title = 'My First View App';
const description = 'Just playing around with View';
const someImg = 'https://images.unsplash.com/photo-1642309484083-dc647e25e1d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80';

const products = {
    socks: {
        name: 'socks',
        quantity: 5,
    }

};

const cart = [];

const productOptions = [
    { details: 'Gender-neutral' },
    { details: '20% polyester' },
    { details: '80% Cotton' }
];

const data = {
    products,
    title,
    description,
    someImg,
    socksInStock: products.socks.quantity > 0,
    productOptions,
    cart
};

const vueConfig = {
  el: '#app',
  data,
  methods: {
    addSockToCart: function () {
        if (this.products.socks.quantity > 0) {
            this.cart.push(this.products.socks);
            this.products.socks.quantity -= 1;
        }
    },
  }
};

const vue = new Vue(vueConfig);