<script>
    import * as SNS from '../../libs/sns';

    //텍스트 배열데이터
    const footerMenus = ['고객센터','이용약관','개인정보처리방침','청소년 보호정책','법적고지','이벤트','인재채용'];
    const footerTexts = [
        ['대표이사 : OSSAM','사업자정보확인','사업자등록번호 : 000-00-00000','통신판매신고번호 : 2023-서울마포-0000호'],
        ['사업장 : 서울특별시 마포구 상암산로 00, DMC디지털큐브 00층(상암동)','호스팅사업자 : 엠브이올리브네트웍스(주)'],
        ['고객문의 바로가기','대표메일 : moving@google.com','고객센터 : 0000-0000 (평일/주말 09시~18시, 공휴일 휴무)'],
        ['ooo 시청자 상담실 (편성 문의 및 시청자 의견) : 000-000-0000','Moving 고객센터(방송편성문의) : 0000-0000']
    ];
</script>

<footer>
    <div class="f_top">
        <div class="notice">
            <h3>공지사항</h3>
            <a href="#!">[안내] 개인정보처리방침 개정 안내 (2023년 11월 3일)</a>
        </div>
        <div class="family">
            <ul>
                <li><a href="#!">브랜드 바로가기 +</a></li>
                <li><a href="#!">그룹 계열사 바로가기 +</a></li>
            </ul>
        </div>
    </div>
    <div class="f_bottom">
        <ul class="f_nav">
            {#each footerMenus as footerMenu, index(footerMenu)}
                <li><a href="#!">{footerMenu}</a></li>
            {/each}
        </ul>
        <div class="footer_text">
            {#each footerTexts as footerText, index(footerText)}
                <p>
                    {#each footerText as text, index(text)}
                        <span>{text}</span>
                    {/each}
                </p>
            {/each}
        </div>
        <ul class="sns">
            {#each SNS.sns as sns, index(sns)}
                <li>
                    <a href={sns.url} target="_blank">
                        <img src={sns.img} alt={sns.name} />
                    </a>
                </li>
            {/each}
        </ul>
        <p class="copy">Copyright © 주식회사 무빙 All right reserved.</p>
    </div>
</footer>