<script>
  import Outer from "./Outer.svelte";

  const handleClick = (event) => {
    alert(event.detail.text);
  };
</script>

<Outer on:msg={handleClick} />

<style>
</style>
