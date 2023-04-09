<template>
  <div>
    <banner title="Bem-vindo à nossa loja" description="Confira nossos produtos mais recentes"
      button-label="Comprar Agora" />
    <div class="product-list-container">
      <product-list />
    </div>
    <shopping-cart />
  </div>
</template>

<style>
.product-list-container {
  margin-top: 40px;
}

.product-list-container>div {
  margin-left: 20px;

}
</style>

<script>
import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar.vue';
import ProductList from '@/components/ProductList.vue';
import Banner from '@/components/Banner.vue';

@Component({
  components: {
    SideBar,
    ProductList,
    Banner
  },
})
export default class HomeView extends Vue { }
</script>
