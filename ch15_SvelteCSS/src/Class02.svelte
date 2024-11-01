<script>
    let border;
</script>

<h3>테두리 선택</h3>
<label>
    <input type="checkbox" bind:checked={border}> 실선
</label>
<hr />
<button class:border>버튼</button>

<style>
    button{
        border: none; border-radius: 5px; background-color: #ededed; 
        padding: 5px 20px; cursor: pointer;
    }
    .border{ border: 3px solid green; }
</style>