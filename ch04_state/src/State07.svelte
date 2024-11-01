<script>
	let language = {
        name: '스벨트',
        release: 2016,
        src: 'https://svelte.dev/favicon.png',
    }
</script>

<h3>이름 : { language.name }</h3>
<h3>배포 년도 : { language.release }년</h3>
<img src={ language.src } alt={ language.name } width="100">