<script>
    import { upcomingPromise } from '../libs/store';
	import { upcomings } from '../libs/store';
    import LoadingList from '../components/common/LoadingList.svelte';
    import UpcomingList from '../components/sub/UpcomingList.svelte';
    import Error from '../components/common/Error.svelte';
    
    const promise = $upcomingPromise;
</script>

{#await promise}
	<LoadingList />	
{:then}
	<UpcomingList datas={$upcomings} />
{:catch error}
    <Error />
{/await}