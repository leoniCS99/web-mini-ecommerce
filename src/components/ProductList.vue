<template>
  <div class="container">
    <div class="overflow-x-hidden">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3" v-for="(produto, index) in produtos" :key="index">
          <b-card :title="produto.name" :img-src="produto.imageUrl" >
            <p class="card-text">{{ produto.description }}</p>
            <b-button variant="primary">Adicionar ao carrinho</b-button>
          </b-card>
          <br/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';



export default {
  name: 'ProductList',
  data() {
    return {
     produtos: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.produtos = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
</script>

<style>
.produto-imagem {
  max-width: 100%;
  height: auto;
  max-height: 150px;
}

.card-img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
  }
  .card {
    max-width: 100%;
    max-height: 300px;
  }
  /* body {
  overflow: hidden;
} */
.overflow-x-hidden {
  overflow-x: hidden;
}

.row {
  display: flex;
  justify-content: center;
}
</style>

