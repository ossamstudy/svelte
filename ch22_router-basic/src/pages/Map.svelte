<script>
    import { afterUpdate } from 'svelte';
    import queryString from 'query-string';
    import { links } from "svelte-routing";

    export let id;

    let parsed = queryString.parse(window.location.search);
    afterUpdate(() => {
        parsed = queryString.parse(window.location.search);
    });

    const storeDatas = [
        {
            id: 1,
            name: '강남에비뉴점',
            addr: '서울특별시 서초구 서초대로77길 62',
            new: 'true'
        },
        {
            id: 2,
            name: '강남역신분당역사점',
            addr: '서울특별시 강남구 강남대로 396',
            new: 'false'
        },
        {
            id: 3,
            name: '강남우성점',
            addr: '서울특별시 강남구 강남대로 328',
            new: 'true'
        }
    ];
</script>

<setcion>
    <h2>오시는길페이지입니다.</h2>
    <ul use:links>
        {#each storeDatas as storeData, index(storeData) }
            <li><a href={`/map/${storeData.id}?new=${storeData.new}`}>스토어{storeData.id}</a></li>
        {/each}
    </ul>
    <h3>
        {#if parsed.new === 'true'}
            <span style="color: red">NEW </span>
        {/if}
        { storeDatas[id-1].name }
    </h3>
    <p>{ storeDatas[id-1].addr }</p>
    <img src="http://placehold.it/300x200" alt="" />
</setcion>

<style>
    h2{ background-color: aquamarine; }
</style>