<script>
    let duration;
    let currentTime = 0;
    let paused = true;

    const onPlay = () => paused = false;
    const onPause = () => paused = true;
    const onInitial = () => {
        paused = true;
        currentTime = 0;
    }
</script>

<h1>Caminandes: Llamigos</h1>
<p>From <a href="https://studio.blender.org/films">Blender Studio</a>. CC-BY</p>
<video
    poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    width="500"
    bind:duration={duration}
    bind:currentTime={currentTime}
    bind:paused={paused}
>
    <track kind="captions" />
</video>
<br />
<button on:click={onPlay}>재생</button>
<button on:click={onPause}>멈춤</button>
<button on:click={onInitial}>초기화</button>
<p>총 재생 시간 : {duration}초</p>
<p>현재 재생 위치 : {currentTime}초</p>