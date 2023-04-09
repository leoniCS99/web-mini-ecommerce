<template>
  <div class="container">
    <form @submit.prevent="cadastrarProduto">
      <div class="form-group">
        <label for="url-imagem">URL da Imagem:</label>
        <input type="text" class="form-control" id="url-imagem" v-model="produto.imagem" required>
      </div>
      <div class="form-group">
        <label for="preco">Preço:</label>
        <input type="number" class="form-control" id="preco" v-model="produto.preco" required>
      </div>
      <div class="form-group">
        <label for="quantidade">Quantidade:</label>
        <input type="number" class="form-control" id="quantidade" v-model="produto.quantidade" required>
      </div>
      <div class="form-group">
        <label for="descricao">Descrição:</label>
        <textarea class="form-control" id="descricao" v-model="produto.descricao" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar Produto</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CadastroProduto',
  data() {
    return {
      produto: {
        imagem: '',
        preco: 0,
        quantidade: 0,
        descricao: ''
      }
    }
  },
  methods: {
    cadastrarProduto() {
      console.log('Produto cadastrado:', this.produto)
    }
  }
}
</script>

<style scoped></style>
