<script>
  import Tabela from "./Tabela.svelte";

  let sayi = 0;

  const arttir = () => {
    sayi++;
  };

  const azalt = () => {
    sayi--;
  };
</script>

<Tabela {sayi} />
<Tabela />

<button on:click={arttir}>Arttır</button>

<button on:click={azalt}>Azalt</button>

<style>
</style>
