<template>
<div class="login-container">
  <h2>Login</h2>
  <form>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Insira seu email" required>
    </div>
    <div class="form-group">
      <label for="password">Senha</label>
      <input type="password" id="password" name="password" placeholder="Insira sua senha" required>
    </div>
    <div class="form-group">
      <button type="submit" class="btn-login" onclick="login()">Entrar</button>
      <button type="button" class="btn-logout">Sair</button>
    </div>
  </form>
</div>

</template>

<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.btn-logout {
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10%;
}

.btn-logout:hover {
  background-color: #c82333;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.btn-login {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #0069d9;
}

body {
  background-color: #ededf1;
}
</style>

<script>
function login() {

}
</script>
