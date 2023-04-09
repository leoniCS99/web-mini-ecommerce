<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <b-button variant="primary">{{ buttonLabel }}</b-button>
  </div>
</template>

<style>
.banner {
  background-color: #25282c;
  padding: 20px;
  text-align: center;
}

.banner > h1 {
  color: #ffff;
}

.banner > p{
  color: #ffff;
}

</style>

<script>
export default {
  name: 'Banner',
  props: {
    title: String,
    description: String,
    buttonLabel: String,
  },
}
</script>


