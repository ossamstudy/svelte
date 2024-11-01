<nav>
	<a href="/" class="active">home</a>
	<a href="/about">about</a>
</nav>

<h1>Home</h1>
<p>여기는 홈인 메인페이지입니다.</p>

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