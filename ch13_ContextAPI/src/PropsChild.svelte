<script>
    export let num;

    $:square = num * num;
</script>

<div>
    <h3>Child 구역</h3>
    <p>제곱 숫자 : { square }</p>
</div>