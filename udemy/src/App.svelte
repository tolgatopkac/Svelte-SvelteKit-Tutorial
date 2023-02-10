<script>
	import Counter from './lib/Counter.svelte';

	// const maxCount = 6;

	const props = {
		maxCount: 10,
		initialCount: 5
	};
</script>

<!-- <Counter initialCount={3} {maxCount} /> -->
<Counter {...props} />

<style>
</style>
