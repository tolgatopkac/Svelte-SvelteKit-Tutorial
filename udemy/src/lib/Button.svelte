<script>
	import { children } from 'svelte/internal';
	export let size = 'small';
	export let shadow = false;
</script>

<!-- Slot -->
<!-- <button><slot /></button> -->
<!-- slot -->
<button class={size === 'large' ? 'size-lg' : 'size-sm'}><slot>Fallback</slot></button>

<button class:size-lg={size === 'large'} class:size-sm={size === 'small'} class:shadow
	><slot>Fallback</slot></button
>

<!-- Props -->
<!-- <button>{title}</button> -->

<!-- Props -->
<style lang="scss">
	@use '../styles/variables.scss';
	button {
		border: none;
		background-color: #ff3e00;
		color: #fff;

		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4), 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(255, 255, 255, 0.1), 0 0);
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
		}
	}
</style>
