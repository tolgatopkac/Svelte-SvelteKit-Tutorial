<script>
  let name = "Tolga";
  let isCompleted = false;

  let menu = ["tatli", "kurabiye", "pasta"];
  let siparisler = [];

  //
  let text = "";
</script>

<!-- INPUT -->
<input type="text" bind:value={name} />
<h1>{name}</h1>

<!-- CHECKBOX -->
<label for="market">
  <input id="market" type="checkbox" bind:checked={isCompleted} />
  <span class={isCompleted ? "done" : ""}>Markete git</span>
</label>

<!-- BIND GROUP -->
<h1>Menu</h1>

{#each menu as item}
  <label for={item} />
  <input type="checkbox" name="item" value={item} bind:group={siparisler} />
  {item}
{/each}

<h2>Siparisler</h2>
{#each siparisler as siparis (siparis)}
  <li>{siparis}</li>
{:else}
  <h4>Siparis Yok</h4>
{/each}
<!--  -->

<!-- text area -->
<textarea bind:value={text} />
<p>{text}</p>

<!-- bind select -->
<style>
  .done {
    text-decoration: line-through;
  }
</style>
