<script>
    let y;
</script>

<svelte:window bind:scrollY={y} />
<div></div>
<h3>스크롤바 좌표 : { y }</h3>

<style>
    div{ height: 2000px; }
    h3{ position: fixed; left: 10px; top: 10px; }
</style>