<script>
	let x = null;
	const numChange = e => x = e.target.value;
</script>

<label for="testBox">양수/음수 테스트</label>
<input type="text" id="testBox" on:keyup={numChange} placeholder="정수를 입력하세요.">

{#if x > 0}
	<p>작성한 숫자는 양수입니다.</p>
{:else if x < 0}
	<p>작성한 숫자는 음수입니다.</p>
{:else if x === '0'}
	<p>작성한 숫자는 0입니다.</p>
{:else}
	<p>정수로 다시 입력하세요.</p>
{/if}