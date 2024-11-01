<script>
	let language = {
        name: '스벨트',
        release: 2016,
        src: 'https://svelte.dev/favicon.png',
    }
    let { name, release, src } = language;
</script>

<h3>이름 : { name }</h3>
<h3>배포 년도 : { release }년</h3>
<img { src } alt={ name } width="100">