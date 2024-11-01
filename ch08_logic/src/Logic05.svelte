<script>
	let teams = ['LG 트윈스','KT 위즈','SSG 랜더스','NC 다이노스','두산 베어스','KIA 타이거즈','롯데 자이언츠','삼성 라이온즈','한화 이글스','키움 히어로즈'];
</script>

<h3>2023 KBO 정규리그 순위</h3>
{#each teams as team,i}
	<p>{i + 1}위 : {team}</p>
{/each}