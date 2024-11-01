<script>
	let clubs = [
        {
            name: 'LG 트윈스',
            founded: 1990,
            hometown: '서울'
        },
        {
            name: 'KT 위즈',
            founded: 2013,
            hometown: '수원'
        },
        {
            name: 'SSG 랜더스',
            founded: 2021,
            hometown: '인천'
        },
        {
            name: 'NC 다이노스',
            founded: 2011,
            hometown: '창원'
        },
        {
            name: '두산 베어스',
            founded: 1982,
            hometown: '서울'
        },
        {
            name: 'KIA 타이거즈',
            founded: 2001,
            hometown: '광주'
        },
        {
            name: '롯데 자이언츠',
            founded: 1982,
            hometown: '부산'
        },
        {
            name: '삼성 라이온즈',
            founded: 1982,
            hometown: '대구'
        },
        {
            name: '한화 이글스',
            founded: 1986,
            hometown: '대전'
        },
        {
            name: '키움 히어로즈',
            founded: 2008,
            hometown: '서울'
        }
    ];
</script>

{#each clubs as club}
    <h3>팀명 : { club.name }</h3>
    <h3>창단 연도 : { club.founded }</h3>
    <h3>연고지 : { club.hometown }</h3>
    <hr />
{/each}
