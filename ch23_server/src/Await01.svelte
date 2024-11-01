<script>
    import axios from 'axios';

    
    let comments = [];

    const getComments = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=21`);
            comments = await res.data;
            return res;
        }catch(error) {
            throw new Error(error);
        }
    };
    
    let promise = getComments();
</script>

<h3>회원 정보</h3>
<div class="comments">
    {#await promise}
        <p>로딩중...</p>
    {:then}
        {#each comments as comment}
            <article>
                <h4>이름 : {comment.name}</h4>
                <h4>이메일 주소 : {comment.email}</h4>
            </article>
        {/each}
    {:catch error}
        <p>{error.message} : 에러가 발생되었습니다.</p>
    {/await}
</div>

<style>
    .comments {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 8px;
    }
</style>