<script>
    import { links } from "svelte-routing"; 
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import H2Title from '../common/H2Title.svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';

    export let datas;
    let tops = [];

    datas.then((value) => {
        tops = value;
    });
</script>

<section class="list_box" use:links>
    <H2Title name="클래스는 영원하다! 높은 평점 영화" />
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={7.2}
        spaceBetween={10}
    >
        {#each tops as top, i }
            <SwiperSlide>
                <a href={`/top/${top.id}`}>
                    <figure>
                        <div class="img_wrap">
                            <img src={`https://image.tmdb.org/t/p/original/${top.poster_path}`} alt={top.title} />
                        </div>
                        {#if i < 9}
                            <figcaption class="lanking_title">{top.title}</figcaption>
                        {:else}
                            <figcaption class="lanking_title2">{top.title}</figcaption>
                        {/if}
                    </figure>
                    <div class="hover_box">
                        <h3>{top.title}</h3>
                        <p class="type">평점 : {top.vote_average * 10}</p>
                        {#if top.overview === ''}
                            <p class="explain">설명은 업데이트되면 추가하겠습니다.</p>
                        {:else}
                            <p class="explain">{top.overview}</p>
                        {/if}
                    </div>
                    <span class="lanking">{i + 1}</span>
                </a>
            </SwiperSlide>
        {/each}
    </Swiper>
</section>