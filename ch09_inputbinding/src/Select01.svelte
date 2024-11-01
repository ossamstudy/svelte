<script>
	let portals = [
		{ name: '사이트선택', url: null },
		{ name: '네이버', url: 'https://naver.com' },
		{ name: '다음', url: 'https://daum.net' },
		{ name: '구글', url: 'https://google.com' }
	];
	let selected;

	const selectChange = () => {
		if(selected != null){
			window.open(selected);
		}
	}
</script>

<h3>포털 사이트 바로가기</h3>
<select bind:value={selected} on:change={selectChange}>
	{#each portals as portal}
		<option value={portal.url}>{ portal.name }</option>
	{/each}
</select>