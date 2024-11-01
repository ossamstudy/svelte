<script>
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';

    //스와이퍼 20개 반복하기 위한 빈배열
    let loadingArray = [];

    for(let i=0;i<20;i++){
        loadingArray.push('');
    }
</script>

<section class="list_box">
    <h2 class="ex">예시 타이틀</h2>
    <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={7.2}
        spaceBetween={10}
    >
        {#each loadingArray as loading, i}
            <SwiperSlide>
                <figure class="ex">
                    <div class="img_wrap">
                    </div>
                    <figcaption></figcaption>
                </figure>
            </SwiperSlide>
        {/each}
    </Swiper>
</section>