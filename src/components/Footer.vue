<template>
  <footer class="footer">
    <div class="container">
      <div class="icons">
        <a
          href="https://github.com/ArickCodeGuy"
          target="_blank"
          class="icon"
          style="background-image: url('/logo.jpg')"
        ></a>
        <a
          href="https://github.com/ArickCodeGuy/test_tasks"
          target="_blank"
          class="icon"
          style="background-image: url('/github_logo.png')"
        ></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: var(--section-margin);
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.3);
  .icons {
    display: flex;
    justify-content: center;
    gap: var(--column-gap);
    .icon {
      width: 3rem;
      height: 3rem;
      // border: 1px solid var(--contrast);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      overflow: hidden;
      transition: 0.3s;
      &:hover {
        scale: 1.2;
      }
    }
  }
}
</style>
