<script>
    import { nowPromise } from '../libs/store';
	import { nows } from '../libs/store';
    import LoadingList from '../components/common/LoadingList.svelte';
    import NowList from '../components/sub/NowList.svelte';
    import Error from '../components/common/Error.svelte';
    
    const promise = $nowPromise;
</script>

{#await promise}
	<LoadingList />	
{:then}
	<NowList datas={$nows} />
{:catch error}
    <Error />
{/await}