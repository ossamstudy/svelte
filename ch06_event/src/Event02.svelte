<script>
	let m = { x: 0, y: 0 };
</script>

<div on:mousemove={e => m = { x: e.clientX, y: e.clientY }}>
	x 좌표 : { m.x } <br>
	y 좌표 : { m.y }
</div>

<style>
	div{ width: 100%; height: 100%; }
</style>