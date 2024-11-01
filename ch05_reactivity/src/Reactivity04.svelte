<script>
	//단 변수선언
	let count = 1;

	//조건절
	$: if(count >= 10){
		alert('10개 이상 구매할 수 없습니다.');
		count = 9;
	}
	$: if(count <= 0){
		alert('최소 구매 개수는 1개입니다.');
		count = 1;
	}


	const plusHandle = () => count++;

	const minusHandle = () => count--;
</script>

<button on:click={minusHandle}>-</button>
<input type="text" value={count} style="width: 25px;">
<button on:click={plusHandle}>+</button>