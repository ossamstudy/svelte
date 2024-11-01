<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Navigation, Pagination } from 'swiper'; //모듈 추가

    import 'swiper/css';
    import 'swiper/css/navigation'; //스타일 추가
    import 'swiper/css/pagination'; //스타일 추가

    const urls = [
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fk0adz%2Fbtsydna0uHj%2F4EvYJ8EPiIOkSTazEroRQk%2Fimg.jpg',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbmakiu%2FbtsyenIDeD8%2FKGR5sLarN6EEcLBtAVLv80%2Fimg.jpg',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl6QZI%2FbtsynB6Vt9I%2Fq3tczSGTJaKyzPIiFlvM60%2Fimg.jpg',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaN3Yb%2FbtsypwK3WoE%2FNtZmJDEaG93iJhyKBnRMw1%2Fimg.jpg',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcfnV8L%2FbtsyaUglYOD%2F3wDuGISkVsw106pjsn3KA0%2Fimg.jpg'
    ];
</script>

<div class="photo">
    <!-- 모듈과 옵션 추가 -->
    <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
    >
        {#each urls as url, i}
            <SwiperSlide>
                <img src={url} alt="여행이미지" width="300" />
            </SwiperSlide>
        {/each}
    </Swiper>
</div>

<style>
    .photo{ width: 300px; margin: 0 auto; }
</style>