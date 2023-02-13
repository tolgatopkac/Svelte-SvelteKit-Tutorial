<script>
  let tab = "mListesi";
  let mListesi = ["elma", "portakal", "kiraz"];
  let sListesi = ["havuç", "ispanak", "lahana"];

  let isim = true;
</script>

<span class:isim>Tolga</span>

<div>
  <span class:selected={tab === "mListesi"} on:click={() => (tab = "mListesi")}
    >Meyve Listesi</span
  >
  <span class:selected={tab === "sListesi"} on:click={() => (tab = "sListesi")}
    >Sebze Listesi</span
  >
</div>

{#if tab === "mListesi"}
  {#each mListesi as item}
    <li>{item}</li>
  {/each}
{:else}
  {#each sListesi as item}
    <li>{item}</li>
  {/each}
{/if}

<style>
  div {
    display: flex;
    padding: 40px;
    justify-content: space-between;
  }

  span {
    cursor: pointer;
  }

  .selected {
    border-bottom: 2px solid orange;
  }

  .isim {
    background-color: blue;
  }
</style>
