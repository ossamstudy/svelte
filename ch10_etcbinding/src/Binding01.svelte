<script>
    let buckets = [
		{ chk: false, text: '웹 프론트엔드 개발자되기' },
		{ chk: false, text: '유럽 여행하기' },
		{ chk: false, text: '영국 가서 손흥민 축구 경기 보기' }
	];
    $: remaining = buckets.filter(bucket => !bucket.chk).length;

    const onAdd = () => {
        buckets = buckets.concat({ chk: false, text: '' });
    }
    const onRemove = () => {
        buckets = buckets.filter(bucket => !bucket.chk);
    }
</script>

<h1>Bucket List</h1>
{#each buckets as bucket}
    <div>
        <input type="checkbox" bind:checked={bucket.chk} />
        <input type="text" placeholder="당신의 버킷 리스트는 뭔가요?" style="width: 250px" bind:value={bucket.text} disabled={bucket.chk} />
    </div>
{/each}
<p>남은 버킷 리스트 : {remaining}</p>
<button on:click={onAdd}>새로운 버킷 추가</button>
<button on:click={onRemove}>성공한 버킷 제거</button>
