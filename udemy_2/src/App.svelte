<script>
  import Modal from "./Modal.svelte";
  let isModalOpen = false;

  const openModal = () => {
    isModalOpen = true;
  };

  const closeModal = () => {
    isModalOpen = false;
  };
</script>

<button on:click={openModal}>Open Modal</button>

<Modal {isModalOpen} on:click={closeModal} />

<style>
</style>
