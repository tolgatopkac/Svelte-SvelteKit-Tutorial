<script>
  import { count } from "./store";
  import Arttir from "./Arttir.svelte";
  import Azalt from "./Azalt.svelte";
  import Reset from "./Reset.svelte";
</script>

<div>
  <p>Sayı: {$count}</p>
  <Arttir />
  <Azalt />
  <Reset />
</div>

<style>
</style>
