<script>
	import Child03 from "./Child03.svelte";

    const allData01 = {
		name: '김철수',
		age: 20,
		hobby: '축구하기'
	}
	const allData02 = {
		name: '김영희',
		age: 21,
		hobby: '넷플릭스 보기'
	}
</script>

<Child03 {...allData01} />
<Child03 {...allData02} />