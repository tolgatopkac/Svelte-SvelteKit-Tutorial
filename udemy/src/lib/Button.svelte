<script>
	import { children } from 'svelte/internal';
</script>

<!-- Slot -->
<!-- <button><slot /></button> -->
<!-- slot -->
<button><slot>Fallback</slot></button>

<!-- Props -->
<!-- <button>{title}</button> -->

<!-- Props -->
<style lang="scss">
	@use '../styles/variables.scss';
	button {
		border: none;
		background-color: #ff3e00;
		color: #fff;
		padding: 15px 20px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		&:hover {
			background-color: variables.$color;
		}
	}
</style>
