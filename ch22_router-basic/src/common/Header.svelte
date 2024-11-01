<script>
    import { links } from "svelte-routing";
</script>
<header>
    <h1>로고</h1>
    <ul use:links>
        <li><a href="/">HOME</a></li>
        <li><a href="/company">회사소개</a></li>
        <li><a href="/map/1?new=true">오시는길</a></li>
        <li><a href="/product">제품소개</a></li>
    </ul>
</header>