<script>
    import { links } from "svelte-routing"; 
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import H2Title from '../common/H2Title.svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';

    export let datas;
    let upcomings = [];

    datas.then((value) => {
        upcomings = value;
    });
</script>

<section class="list_box" use:links>
    <H2Title name="곧 개봉할 흥미로운 예정작" />
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={7.2}
        spaceBetween={10}
    >
        {#each upcomings as upcoming, index(upcoming) }
            <SwiperSlide>
                <a href={`/upcoming/${upcoming.id}`}>
                    <figure>
                        <div class="img_wrap">
                            <img src={`https://image.tmdb.org/t/p/original/${upcoming.poster_path}`} alt={upcoming.title} />
                        </div>
                        <figcaption>{upcoming.title}</figcaption>
                    </figure>
                </a>
            </SwiperSlide>
        {/each}
    </Swiper>
</section>