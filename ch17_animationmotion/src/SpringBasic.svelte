<script>
	let x, y;
</script>

<svg on:mousemove={(e) => { x = e.clientX; y = e.clientY; }}>
	<circle cx={x} cy={y} r="10" />
</svg>

<style>
	svg{ width: 100%; height: 100%; margin: -8px; }
	circle{ fill: #ff3e00; }
</style>
