<script>
    let w;
    let h;
    let size = 20;
</script>

<p>슬라이더로 글자 크기를 변경해보세요.</p>
<input type="range" bind:value={size} min="10" max="100" />
<p>글자 크기 : {size}px</p>
<div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px">글자</span>
</div>
<ul>
    <li>가로 폭 : {w}</li>
    <li>세로 높이 : {h}</li>
</ul>


<style>
    div{ display: inline-block; border: 3px solid black; }
</style>