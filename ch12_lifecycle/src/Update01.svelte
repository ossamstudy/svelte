<script>
    import { beforeUpdate, afterUpdate } from 'svelte';

    let num = 0;

    beforeUpdate(() => {
        console.log('업데이트가 실행되기 전...');
    });
    afterUpdate(() => {
        console.log('업데이트 완료!');
    });

    const handleClick = () => {
        num++;
    }
</script>

<button on:click={handleClick}>숫자 증가</button>
<p>현재 숫자: {num}</p>
