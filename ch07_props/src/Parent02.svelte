<script>
	//여기는 부모컴포넌트
	import Child02 from "./Child02.svelte";

    let age01 = 20;
    let age02 = 21;

    const agePlus = () => {
        age01++;
        age02++;
    }
    const ageMinus = () => {
        age01--;
        age02--;
    }
</script>

<Child02 name={'김철수'} age={age01} hobby={'축구하기'} />
<Child02 name="이영희" age={age02} hobby="넷플릭스 보기" />
<button on:click={ageMinus}>나이 감소-</button>
<button on:click={agePlus}>나이 증가+</button>