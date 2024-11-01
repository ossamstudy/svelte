<script>
	//단 변수선언
	let num = 2;

    //each 블록을 위한 배열
    let numbers = [1,2,3,4,5,6,7,8,9];

	//조건절
	$: if(num >= 10){
		alert('구구단은 9단을 초과할 수 없습니다.');
		num = 9;
	}
	$: if(num <= 1){
		alert('구구단은 2단보다 작을 수 없습니다.');
		num = 2;
	}

	const plusHandle = () => num++;
	const minusHandle = () => num--;
</script>

<h2>구구단 출력</h2>
<h3>
    {num}단
    <button on:click={minusHandle}>-</button>
    <button on:click={plusHandle}>+</button>
</h3>
{#each numbers as number}
    <p>{num} × {number} = {num * number}</p>
{/each}
