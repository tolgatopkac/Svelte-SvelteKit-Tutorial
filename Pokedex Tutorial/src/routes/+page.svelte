<script lang="ts">
  /*   const greeting = "Hello";
  const name = "world"; */

  // ----------------------------------------------------------------
  // with object
  // ----------------------------------------------------------------

  const greetingObj = {
    greeting: "Hello",
    name: "world",
  };

  const data = ["yellow", "red", "blue"];
</script>

<h1>{greetingObj.greeting} to {greetingObj.name}</h1>

{#each data as color, i (color)}
  <div>
    {i + 1}: {color},
  </div>
{/each}
