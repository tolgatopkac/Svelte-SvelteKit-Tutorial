<script>
  import { count } from "./store";

  const azalt = () => {
    count.update((value) => value - 1);
  };
</script>

<button on:click={azalt}>-</button>
