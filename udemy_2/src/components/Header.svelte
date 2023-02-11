<script>
  import Button from "./Button.svelte";
</script>

<div class="header">
  <h1>Header</h1>
  <Button />
  <ul>
    <li>About</li>
    <li>Tutorial</li>
    <li>Example</li>
  </ul>
</div>

<style>
  .header {
    background-color: aquamarine;
    display: flex;
  }

  h1 {
    flex: 1;
  }

  ul {
    display: flex;
  }
</style>
