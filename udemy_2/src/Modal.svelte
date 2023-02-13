<script>
  export let isModalOpen;
  import { fade } from "svelte/transition";
</script>

{#if isModalOpen}
  <div class="box" transition:fade>
    <div class="modal">
      <span on:click>X</span>
      <h1>Modal</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
        dicta!
      </p>
    </div>
  </div>
{/if}

<style>
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(133, 121, 121);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    position: relative;
    width: 30%;
    height: 300px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
  }
  span {
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 20px;
    color: black;
    border-radius: 50%;
    background-color: white;
    padding: 10px 15px;
    cursor: pointer;
  }
</style>
