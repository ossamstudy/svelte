<script>
    const colorChange = (node) => {
        node.style.color = 'red';
    }
</script>

<h1 use:colorChange>제목 태그1</h1>
<h1 use:colorChange>제목 태그2</h1>
<h1>제목 태그3</h1>