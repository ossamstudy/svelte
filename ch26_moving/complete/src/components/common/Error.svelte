<script>
    import { link } from "svelte-routing"; 
    import Icon from '@iconify/svelte';
</script>


<div class="error_box">
    <Icon icon="jam:alert" />
    <h3>죄송합니다. <span class="red">시스템 에러</span>입니다.</h3>
    <p class="basic_explain">
        현재 시스템 오류가 발생했습니다. <br />
        새로 고침 단추를 클릭하거나 나중에 다시 시도하십시오. <br />
        주소표시줄에 페이지 주소를 입력하셨다면 올바르게 입력되었는지 확인하십시오.
    </p>
    <a href="#!">고객센터문의하기 &gt;</a>
    <p class="inquiry_explain">전화 : 0000-0000(평일 09시~18시) / 이메일 moving@gmail.com</p>
    <ul class="page_btn">
        <li><a href="/" use:link>메인 페이지로 이동</a></li>
    </ul>
</div>
