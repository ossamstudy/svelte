<script>
	let chk = false;
</script>

<label>
	<input type="checkbox" bind:checked={chk}> 약관 동의
</label>
{#if chk}
	<p>당신은 약관에 동의했습니다.<br>이제 구독이 가능합니다.</p>
{:else}
	<p>당신은 약관에 동의하지 않았습니다.<br>아직 구독이 불가능합니다.</p>
{/if}
<button disabled={!chk}>
	구독
</button>