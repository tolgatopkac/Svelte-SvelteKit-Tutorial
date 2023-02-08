<script lang="ts">
  /*   const greeting = "Hello";
  const name = "world"; */

  // ----------------------------------------------------------------
  // with object
  // ----------------------------------------------------------------

  // const greetingObj = {
  //   greeting: "Hello",
  //   name: "world",
  // };

  // const data = ["yellow", "red", "blue"];

  import { generations } from "./generations";
</script>

<!-- <h1>{greetingObj.greeting} to {greetingObj.name}</h1> -->

<!-- {#each data as color, i (color)}
  <div>
    {i + 1}: {color},
  </div>
{/each}
 -->

{#each generations as generation (generation.id)}
  <h1>{generation.name}</h1>
  <p>Games : {generation.games.join(", ")}</p>
  <p>Main region: {generation.main_region}</p>
{/each}
