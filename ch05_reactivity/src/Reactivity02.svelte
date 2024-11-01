<script>
    //상태변수선언
	let count = 1;

    //반응성 변수선언
	$: doubled = count * 2;
	$: square = count * count;
    
	const handleClick = () => count++;
</script>

<button on:click={handleClick}>
	클릭 수 : {count}
</button>
<h3>두 배 구하기</h3>
<p>{count} × 2 = {doubled}</p>
<h3>제곱 구하기</h3>
<p>{count} × {count} = {square}</p>