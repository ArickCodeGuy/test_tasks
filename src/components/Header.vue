<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/">Main</router-link>
        <router-link to="/tests">Tests</router-link>
      </nav>
      <div class="change-theme" @click="changeTheme"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: rgba(var(--rgba-bgc), 0.3);
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 2rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--column-gap);
  }
}
.nav {
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    font-size: 1.6rem;
    line-height: 1em;
    color: var(--color-primary);
    text-decoration: none;
  }
}
.change-theme {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--contrast);
}
</style>
