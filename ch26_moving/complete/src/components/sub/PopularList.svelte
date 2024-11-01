<script>
    import { links } from "svelte-routing"; 
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import H2Title from '../common/H2Title.svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';

    export let datas;
    let populars = [];

    datas.then((value) => {
        populars = value;
    });
</script>

<section class="list_box" use:links>
    <H2Title name="현재 가장 인기 있는 영화" />
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={7.2}
        spaceBetween={10}
    >
        {#each populars as popular, i }
            <SwiperSlide>
                <a href={`/popular/${popular.id}`}>
                    <figure>
                        <div class="img_wrap">
                            <img src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`} alt={popular.title} />
                        </div>
                        {#if i < 9}
                            <figcaption class="lanking_title">{popular.title}</figcaption>
                        {:else}
                            <figcaption class="lanking_title2">{popular.title}</figcaption>
                        {/if}
                    </figure>
                    <div class="hover_box">
                        <h3>{popular.title}</h3>
                        <p class="type">평점 : {popular.vote_average * 10}</p>
                        {#if popular.overview === ''}
                            <p class="explain">설명은 업데이트되면 추가하겠습니다.</p>
                        {:else}
                            <p class="explain">{popular.overview}</p>
                        {/if}
                    </div>
                    <span class="lanking">{i + 1}</span>
                </a>
            </SwiperSlide>
        {/each}
    </Swiper>
</section>