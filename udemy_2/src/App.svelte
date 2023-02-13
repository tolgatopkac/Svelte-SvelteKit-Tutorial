<script>
  import { onMount } from "svelte";
  let datas = [];

  onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    datas = await res.json();
  });
</script>

<div>
  {#each datas as item (item.id)}
    <p>{item.title}</p>
  {/each}
</div>

<style>
</style>
