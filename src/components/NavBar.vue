<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/carrinho">
            Carrinho
            <span v-if="numProdutosCarrinho > 0" class="ml-1 badge badge-pill badge-primary">{{ numProdutosCarrinho
            }}</span>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
 
<script>
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BIcon, BIconCartFill } from 'bootstrap-vue';
export default {
  name: 'NavBar',
  components: {
    BIcon,
    BIconCartFill,
  },
  data() {
    return {
      numProdutosCarrinho: 0
    }
  },
  methods: {
    adicionarAoCarrinho() {
      this.numProdutosCarrinho += 1;
    }
  }
}

</script>
 
<style></style>
 