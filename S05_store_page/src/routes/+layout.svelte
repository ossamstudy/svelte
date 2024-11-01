<script>
    import { page, navigating } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>home</a>
	<a href="/about" aria-current={$page.url.pathname === '/about'}>about</a>
	<a href="/map" aria-current={Number($page.url.pathname.indexOf('/map')) !== -1}>map</a>
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
    nav a[aria-current="true"]{ text-decoration: underline; }
</style>