<script>
    import { links } from "svelte-routing"; 
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import H2Title from '../common/H2Title.svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';

    export let datas;
    let nows = [];

    datas.then((value) => {
        nows = value;
    });
</script>

<section class="list_box" use:links>
    <H2Title name="새로 개봉한 현재 상영작" />
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={7.2}
        spaceBetween={10}
    >
        {#each nows as now, index(now) }
            <SwiperSlide>
                <a href={`/now/${now.id}`}>
                    <figure>
                        <div class="img_wrap">
                            <img src={`https://image.tmdb.org/t/p/original/${now.poster_path}`} alt={now.title} />
                        </div>
                        <figcaption>{now.title}</figcaption>
                    </figure>
                </a>
            </SwiperSlide>
        {/each}
    </Swiper>
</section>