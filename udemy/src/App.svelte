<script>
	import Button from './lib/Button.svelte';
</script>

<!-- Slot -->
<!-- <Button>Button Text</Button> -->
<!-- Slot -->

<!-- PROPS -->
<!-- <Button title="Props" /> -->
<!-- PROPS -->
<div>
	<Button size="large" shadow bgColor="red" textColor="blue">Button Text</Button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
