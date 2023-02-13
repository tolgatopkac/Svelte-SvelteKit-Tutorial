<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const clickBtn = () => {
    dispatch("msg", { text: "Merhaba" });
  };
</script>

<h1>Inner</h1>
<button on:click={clickBtn}>Click Button</button>
