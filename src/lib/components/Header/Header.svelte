<script>
	import logo from './logo.jpg';
</script>

<header>
	<img class="logo" alt="Houndwalker logo" src={logo} />
</header>

<style>
	header {
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 120px;
	}

	img {
		width: 80vw;
		max-width: 250px;
		mix-blend-mode: multiply;
	}
</style>
