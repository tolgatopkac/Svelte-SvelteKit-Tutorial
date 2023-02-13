<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch("mode", { yeniMode: "dark" });
  };
</script>

<div>
  <h1>Header</h1>
  <button on:click={handleClick}>Change Mode</button>
</div>
