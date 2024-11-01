<script>
	let num = 0; //state(상태값)

	//기존 변수값에서 1씩 증가
	const increaseNumber = () => num++;
	
	//기존 변수값에서 1씩 증가
	const decreaseNumber = () => num--;
</script>

<button on:click={increaseNumber}>+</button>
<button on:click={decreaseNumber}>-</button>
<hr />
<h1>클릭횟수 : { num }</h1>