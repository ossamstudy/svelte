<script>
    const handleClick = () => {
        let move = confirm('제이펍사이트로 이동하시겠습니까?');
        move && location.assign('http://jpub.kr');
    }
</script>
<h1>
    <a href="http://jpub.kr" on:click|preventDefault={handleClick}>제이펍출판사</a>
</h1>