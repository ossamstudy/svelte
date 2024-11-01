<script>
    //미완료 버킷리스트
    let bid = 1;
    let buckets = [
		{ id: bid++, chk: false, text: '웹 프론트엔드 개발자되기' },
		{ id: bid++, chk: false, text: '유럽 여행하기' },
		{ id: bid++, chk: false, text: '영국가서 손흥민 축구 경기 보기' }
	];

    //남은 버킷개수
    $: remainingBuckets = buckets.filter(bucket => !bucket.chk).length;

    //완료버킷리스트
    let finished = [];

    //완료된 버킷개수
    $: finishedBuckets = finished.filter(bucket => bucket.chk).length;

    //버킷리스트 추가 이벤트 함수
    const onAdd = () => {
        buckets = buckets.concat({ chk: false, text: '' });
    }
</script>

<h1>Bucket List</h1>
<div class="bucketBlock">
    <!-- 미완료 구역 -->
    <div class="unfinished">
        <h2>Unfinished Buckets</h2>
        {#each buckets as bucket (bucket)}
            <div>
                <input type="checkbox" bind:checked={bucket.chk} />
                <input type="text" placeholder="당신의 버킷리스트는 뭔가요?" style="width: 250px" bind:value={bucket.text} disabled={bucket.chk} />
            </div>
        {/each}
        <p>남은 버킷리스트 : {remainingBuckets}</p>
        <button on:click={onAdd}>새로운 버킷 추가</button>
    </div>
    <!-- 완료 구역 -->
    <div class="finished">
        <h2>Finished Buckets</h2>
        {#each finished as bucket (bucket)}
            <div>
                <input type="checkbox" bind:checked={bucket.chk} />
                <input type="text" placeholder="당신의 버킷리스트는 뭔가요?" style="width: 250px" bind:value={bucket.text} disabled={bucket.chk} />
            </div>
        {/each}
        <p>완료된 버킷리스트 : {finishedBuckets}</p>
    </div>
</div>

<style>
    .bucketBlock{ display: flex; }
    .unfinished{ margin-right: 40px; }
</style>