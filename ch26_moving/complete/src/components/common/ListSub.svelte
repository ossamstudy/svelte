<script>
    import Icon from '@iconify/svelte';

    export let id;
    export let datas;
    export let genres;

    const data = datas.filter(data => {
        return data.id === id;
    });

    const { genre_ids, original_title, overview, poster_path, release_date, title } = data[0];

    let genre_ko_ids = [];

    for(let i in genre_ids){
        for(let j in genres){
            if(genre_ids[i] === genres[j].id){
                genre_ko_ids.push(genres[j].name);
            }
        }
    }
</script>

<div class="subpage_box">
    <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} class="contentsBg" />
    <div class="contents_wrap">
        <div class="contents_left">
            <h2>{title}({original_title})</h2>
            <ul class="info">
                {#if release_date}
                    <li>{release_date}</li>
                {/if}
                {#each genre_ko_ids as genre_ko_id, i}
                    <li>{genre_ko_id}</li>
                {/each}
            </ul>
            <ul class="btn">
                <li class="view_btn"><a href="#!">▶ 영화 시청하기</a></li>
                <li class="bookmark_btn">
                    <a href="#!">
                        <Icon icon="clarity:heart-line" />
                        찜
                    </a>
                </li>
                <li class="share_btn">
                    <a href="#!">
                        <Icon icon="octicon:share-24" />
                        공유
                    </a>
                </li>
            </ul>
            <p>
                {#if overview === ''}
                    설명은 업데이트되면 추가하겠습니다.
                {:else}
                    {overview}
                {/if}
            </p>
        </div>
        <div class="poster_wrap">
            <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
        </div>
    </div>
</div>