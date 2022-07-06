<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://gudlogo.com/wp-content/uploads/2019/05/logo-con-meo-34.png" alt="Avatar Logo" style="width:40px;" class="rounded-pill">
        </a>
        <ul class="navbar-nav">
          <li class="nav-item mr-5">
            <router-link to="/">Hợp đồng</router-link>
          </li>
          <li class="nav-item mr-5">
            <router-link to="/picking-word">Picking Word</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="mt-3 container">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>