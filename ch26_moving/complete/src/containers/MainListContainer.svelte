<script>
	import { nowPromise } from '../libs/store';
	import { nows } from '../libs/store';
    import MainLoading from '../components/common/MainLoading.svelte';
    import MainList from '../components/main/MainList.svelte';
    import Error from '../components/common/Error.svelte';

	const promise = $nowPromise;
</script>

{#await promise}
	<MainLoading />	
{:then}
	<MainList datas={$nows} />
{:catch error}
    <Error />
{/await}