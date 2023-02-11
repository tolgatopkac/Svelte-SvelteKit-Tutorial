<script>
	import Button from './lib/Button.svelte';
	import FaAdn from 'svelte-icons/fa/FaAdn.svelte';
	import FaAdversal from 'svelte-icons/fa/FaAdversal.svelte';
</script>

<!-- Slot -->
<!-- <Button>Button Text</Button> -->
<!-- Slot -->

<!-- PROPS -->
<!-- <Button title="Props" /> -->
<!-- PROPS -->
<div>
	<Button let:isLeftHovered size="large" shadow>
		<div style:width="20px" slot="leftContent">
			{#if isLeftHovered}
				<FaAdn />
			{:else}
				<FaAdversal />
			{/if}
		</div>
		Button Text
	</Button>
</div>

<style>
</style>
