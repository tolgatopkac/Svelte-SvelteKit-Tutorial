<script>
  import Header from "./Header.svelte";

  let mode = "light";

  const changeMode = (event) => {
    if (mode === "light") {
      mode = event.detail.yeniMode;
    } else {
      mode = "light";
    }
  };
</script>

<div class={mode === "light" ? "light" : "dark"}>
  <Header on:mode={changeMode} />
</div>

<style>
  div {
    width: 100%;
    height: 100vh;
    /* background-color: ; */
  }
  .light {
    background-color: #fff;
    color: black;
  }

  .dark {
    background-color: black;
    color: #fff;
  }
</style>
