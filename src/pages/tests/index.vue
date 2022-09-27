<template>
  <div class="Tests-page">
    <seciton class="section">
      <div class="container">
        <h1>Test tasks</h1>
        <div class="items">
          <div class="item">
            <div class="left">
              <!-- <img src="./sknt/design_result.jpg" alt="" /> -->
            </div>
            <div class="right">
              <div class="right__content">
                <h2>sknt</h2>
                <p>
                  Разработать wizard для расчета стоимости подключения абонента.
                </p>
                <h3>Стек:</h3>
                <p>
                  node js version 14.17.6, Vue 3 composition api, Vite, HTML,
                  SCSS, TypeScript, pinia
                </p>
              </div>
              <div class="right__bottom">
                <router-link class="btn" :to="'/tests/sknt'">Демо</router-link>
                <a
                  class="btn"
                  href="https://github.com/ArickCodeGuy/test_tasks/tree/main/src/pages/tests/sknt"
                  target="_blank"
                  >Github</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </seciton>
  </div>
</template>

<style lang="scss" scoped>
.items {
  display: grid;
  gap: var(--column-gap);
}
.item {
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(var(--rgba-bgc), 0.4);
  color: var(--color-secondary);
  text-decoration: none;
  @media (min-width: 1200px) {
    height: 400px;
    display: flex;
  }
  .left {
    position: relative;
    flex-shrink: 0;
    background-color: rgba(var(--rgba-bgc), 0.2);
    @media (min-width: 1200px) {
      width: 400px;
      &::after {
        content: '';
        display: block;
        padding-top: 100%;
      }
    }
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      @media (min-width: 1200px) {
        width: 80%;
        height: 80%;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    &__content {
      margin-bottom: 1rem;
    }
    &__bottom {
      margin-top: auto;
      display: flex;
      gap: var(--column-gap);
      flex-wrap: wrap;
      @media (min-width: 768px) {
        .btn {
          width: unset;
        }
      }
    }
  }
}
</style>
