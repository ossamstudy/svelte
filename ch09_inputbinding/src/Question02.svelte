<script>
    let chk = false;
</script>

<label>
    <input type="checkbox" bind:checked={chk} />
    오늘 드림으로 받아 보시겠어요?
</label>
{#if chk}
    <p>기본 배송지 : 서울시 중구 OO로 10길 8</p>
{/if}