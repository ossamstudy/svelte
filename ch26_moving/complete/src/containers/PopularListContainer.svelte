<script>
    import { popularPromise } from '../libs/store';
	import { populars } from '../libs/store';
    import LoadingList from '../components/common/LoadingList.svelte';
    import PopularList from '../components/sub/PopularList.svelte';
    import Error from '../components/common/Error.svelte';
    
    const promise = $popularPromise;
</script>

{#await promise}
	<LoadingList />	
{:then}
	<PopularList datas={$populars} />
{:catch error}
    <Error />
{/await}