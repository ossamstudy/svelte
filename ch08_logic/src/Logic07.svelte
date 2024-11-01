<script>
	let langs = [
        {
            id: 1,
            name: '스벨트(Svelte)',
            release: 2016,
            src: 'https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg',
        },
        {
            id: 2,
            name: '리액트(React)',
            release: 2013,
            src: 'https://ko.legacy.reactjs.org/favicon.ico',
        },
        {
            id: 3,
            name: '뷰(Vue.js)',
            release: 2013,
            src: 'https://v2.ko.vuejs.org/images/logo.png',
        }
    ];
    const removeClick = id => {
		langs = langs.filter(lang => lang.id !== id);
	}
</script>

<h3>웹프론트엔드 언어</h3>
{#each langs as lang }
	<div style="border: 2px solid black; width: 200px; padding: 10px;">
        <h4>이름 : { lang.name }</h4>
        <p>배포년도 : { lang.release }년</p>
        <img src={ lang.src } alt={ lang.name } height="50">
        <br>
        <button on:click={() => removeClick(lang.id)}>삭제</button>
    </div>
{/each}
