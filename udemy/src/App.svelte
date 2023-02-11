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
	<Button size="large" shadow>Button Text</Button>

	<Button size="small" shadow>Button Text</Button>

	<Button />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
