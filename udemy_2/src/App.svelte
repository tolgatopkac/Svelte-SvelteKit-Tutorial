<script>
  let sayi = 0;
  $: click = sayi;
  const handleClick = () => {
    sayi++;
  };
</script>

<button on:click={handleClick}>
  {sayi} kez tiklandi
</button>

<p>{click}</p>

<style>
</style>
