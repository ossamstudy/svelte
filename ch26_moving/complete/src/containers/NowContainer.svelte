<script>
    import { nowPromise } from '../libs/store';
	import { nows } from '../libs/store';
	import { genres } from '../libs/store';
    import MainLoading from '../components/common/MainLoading.svelte';
    import ListSub from '../components/common/ListSub.svelte';
    import Error from '../components/common/Error.svelte';

    export let id;

    const promise = $nowPromise;
    let datas = [];
    let genresDatas = [];
    $nows.then(value => {
        datas = value;
    });
    $genres.then(value => {
        genresDatas = value;
    });
</script>

{#await promise}
    <MainLoading />
{:then}
    <ListSub id={id} datas={datas} genres={genresDatas} />
{:catch error}
    <Error />
{/await}