<script>
  import logo from './logo.jpg';
</script>

<header class="header">
  <img class="header__logo" alt="Houndwalker logo" src={logo} />
</header>

<style>
  .header {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
  }

  .header__logo {
    width: 80vw;
    max-width: 250px;
  }
</style>