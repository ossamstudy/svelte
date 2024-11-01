<script>
    import { links } from "svelte-routing";
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte'; 

    //header컴포넌트를 바인딩하는 변수
    let header;

    //current : 해당 서브페이지 a태그 활성화 처리 변수
    let current = '';

    //스크롤 이벤트 함수
    const handleScroll = () => {
        let windowTop = window.scrollY;

        if(windowTop > 50){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    }

    onMount(() => {
        const timer = setInterval(()=>{
            window.addEventListener('scroll',handleScroll);
        },100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll',handleScroll);
        }
    });
</script>

<header use:links bind:this={header}>
    <h1><a href="/" class:active={current === ''} on:click={() => current = ''}><img src="./img/moving_logo.svg" alt="무빙로고" /></a></h1>
    <ul>
        <li><a href="/now" class:active={current === 'now'} on:click={() => current = 'now'}><Icon icon="ic:round-live-tv" color="white" height="28" />현재상영작</a></li>
        <li><a href="/popular" class:active={current === 'popular'} on:click={() => current = 'popular'}>인기영화</a></li>
        <li><a href="/upcoming" class:active={current === 'upcoming'} on:click={() => current = 'upcoming'}>개봉예정작</a></li>
        <li><a href="/top" class:active={current === 'top'} on:click={() => current = 'top'}>높은평점</a></li>
    </ul>
</header>