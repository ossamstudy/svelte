<script>
    let current = 'home';
</script>

<nav>
	<a href="/" class:active={current === 'home'} on:click={() => current = 'home'}>home</a>
	<a href="/about" class:active={current === 'about'} on:click={() => current = 'about'}>about</a>
	<a href="/map" class:active={current === 'map'} on:click={() => current = 'map'}>map</a>
</nav>
<slot />

<style>
    nav{
        position: relative; background: #e0e6eb;
        display: flex; gap: 1em; padding: 1em;
        margin: 0 0 1em 0; border-radius: 5px;
    }
    nav a{
        color: #333; text-decoration: none;
        text-transform: uppercase;
    }
    nav a:hover{ color: blue; text-decoration: underline; }
    nav a.active{ text-decoration: underline; }
</style>