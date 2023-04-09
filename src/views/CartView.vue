<template>
  <div class="cart">
    <div class="cart-header">
      <h1>Carrinho de compras</h1>
    </div>
    <div class="cart-items">
      <div class="cart-item" v-for="(item, index) in items" :key="index">
        <div class="cart-item-image">
          <img :src="item.image" :alt="item.name">
        </div>
        <div class="cart-item-details">
          <p>{{ item.name }}</p>
          <p>Preço: R$ {{ item.price }}</p>
          <div class="cart-item-quantity">
            <label>Quantidade:</label>
            <input type="number" v-model="item.quantity" min="1">
          </div>
        </div>
        <div class="cart-item-buttons">
          <button class="btn btn-danger" @click="removeItem(index)">Remover</button>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <p>Total: R$ {{ total }}</p>
      <router-link class="btn btn-primary" to="/login" style="margin-right: auto; align-self: center; margin-top: 60px;margin-left: -8%;">Finalizar Compra</router-link>
      <router-link class="btn btn-primary" to="/" style="margin-right: auto; align-self: center; margin-top: 60px;margin-left: -40%;">Continuar comprando</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Produto 1', price: 10.0, quantity: 2, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896' },
        { name: 'Produto 2', price: 20.0, quantity: 1, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896' },
        { name: 'Produto 3', price: 30.0, quantity: 3, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896' },
      ],
    };
  },
  computed: {
    total() {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    },
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    }
  },
};
</script>

<style>
.cart {
  margin: 20px;
}

.cart-header {
  text-align: center;
}

.cart-items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.cart-item:last-child {
  margin-right: 0;
}

.cart-item-image {
  width: 40%;
}

.cart-item-image img {
  max-width: 100%;
  height: auto;
}

.cart-item-details {
  width: 50%;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
