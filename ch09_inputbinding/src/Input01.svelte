<script>
	let name = '';
</script>

<input type="text" bind:value={name} placeholder="이름을 입력하세요.">
<p>안녕! {name || '낯선 사람'}!</p>