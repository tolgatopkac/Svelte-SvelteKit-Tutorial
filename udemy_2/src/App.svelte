<script>
  import Card from "./Card.svelte";

  // --------------------------------
  let user = false;

  const toggle = () => {
    user = !user;
  };
  // ----------------------------------

  let object = [
    {
      id: 1,
      isim: "A",
      yazar: "B",
    },
    {
      id: 2,
      isim: "C",
      yazar: "D",
    },
    {
      id: 3,
      isim: "E",
      yazar: "F",
    },
  ];

  const handleClick = () => {
    object = object.slice(1);
  };
</script>

<!--IF ELSE -->
{#if !user}
  <button on:click={toggle}>Login</button>
{:else}
  <button on:click={toggle}>Logout</button>
{/if}
<!--IF ELSE  -->

<!-- Each -->
{#each object as kitap (kitap.id)}
  <!-- {#each object as isim (isim.id)} -->

  <Card {...kitap} />
{:else}
  <div>Kitap kalmadı</div>

  <!-- <Card isim={kitap.isim} yazar={kitap.yazar} /> -->

  <!-- 
    <div>
      <h4>{isim}</h4>
      <h4>{yazar}</h4>
    </div> -->
{/each}
<button on:click={handleClick}> En baştan kaldır </button>

<style>
</style>
