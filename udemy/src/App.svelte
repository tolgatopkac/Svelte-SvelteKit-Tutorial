<script>
	import Button from './lib/Button.svelte';
	import FaAdn from 'svelte-icons/fa/FaAdn.svelte';
</script>

<!-- Slot -->
<!-- <Button>Button Text</Button> -->
<!-- Slot -->

<!-- PROPS -->
<!-- <Button title="Props" /> -->
<!-- PROPS -->
<div>
	<Button size="large" shadow>
		<div style:width="20px" slot="leftContent">
			<FaAdn />
		</div>
		Button Text</Button
	>
</div>

<style>
</style>
