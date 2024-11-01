<script>
    import { onMount } from 'svelte';
    import { link } from "svelte-routing"; 
    import { Autoplay, Pagination, EffectFade } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/pagination';

    export let datas;
    let mains = [];
    const random = Math.floor(Math.random() * 15);

    datas.then((value) => {
        mains = value.slice(random,random + 5);
    });

    //일시정지/재생버튼 처리
    let swiper;
    let btnPause;
    let btnPlay;
    let cnt = false;

    //초기 실행시 메인이미지 스와이퍼를 담을 예정
    onMount(() => {
        //bind를 통해서 선택해도 선택이 잘 안됨 => 아래와 같이 자바스크립트로 직접적으로 선택
        const swiperinstance = document.querySelector('.mainSwiper').swiper;
        swiper = swiperinstance;
    });

    const onHandleClick = () => {
        if(cnt){ //일시정지 상태 => 플레이버튼이 보이는 상태
            btnPause.classList.remove('active');
            btnPlay.classList.add('active');
            swiper.autoplay.start(); //재실행
        }else{ //플레이 상태
            btnPause.classList.add('active');
            btnPlay.classList.remove('active');
            swiper.autoplay.stop(); //일시정지
        }
        cnt = !cnt;
    }
</script>
<main>
    <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={'fade'}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        bind:this={swiper}
        class="mainSwiper"
    >
        {#each mains as main, index(main) }
            <SwiperSlide>
                <img src={`https://image.tmdb.org/t/p/original/${main.backdrop_path}`} alt={main.title} /><br />
                <h3>{main.title}</h3>
                <p>
                    {#if main.overview === ''}
                        새롭게 개봉한 [{main.title}]를 만나볼까요?
                    {:else}
                        {main.overview}
                    {/if}
                </p>
                <a href={`/now/${main.id}`} use:link>자세히보기</a>
            </SwiperSlide>
        {/each}
    </Swiper>
    <!-- play/pause처리 -->
    <div class="swiper-playpause">
        <button 
            class="btn_pause" 
            bind:this={btnPause}
            on:click={onHandleClick}
        ></button>
        <button
            class="btn_play active"
            bind:this={btnPlay}
            on:click={onHandleClick}
        ></button>
    </div>
</main>