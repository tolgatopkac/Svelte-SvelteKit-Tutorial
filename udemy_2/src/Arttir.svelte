<script>
  import { count } from "./store";
  const sayiArttir = () => {
    count.update((value) => value + 1);
  };
</script>

<button on:click={sayiArttir}>+</button>
