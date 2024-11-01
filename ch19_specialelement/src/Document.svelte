<script>
	let selection = '';

	const handleSelectionChange = (e) => (selection = document.getSelection());
</script>

<svelte:document on:selectionchange={handleSelectionChange} />

<h3>이 글자를 선택하면 아래 그대로 반환됩니다.</h3>
<hr />
<p>선택된 글자: {selection}</p>
