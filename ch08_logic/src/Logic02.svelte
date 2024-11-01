<script>
	let user = { loggedState: false };
    const toggle = () => user.loggedState = !user.loggedState;
</script>

{#if user.loggedState}
	<button on:click={toggle}>로그아웃</button>
	<p>현재 로그인 상태입니다.</p>
{:else}
	<button on:click={toggle}>로그인</button>
	<p>현재 로그아웃 상태입니다.</p>
{/if}