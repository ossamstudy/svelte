<script>
    const today = new Date(); //오늘의 날짜와 시간 담는 변수
    const week = ["일", "월", "화", "수", "목", "금", "토"]; //요일을 문자로 담는 변수

    //각각 년, 월, 일, 요일을 담는 객체
    const dateString = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        date: today.getDate(),
        day: today.getDay()
    };

    //비구조화할당 처리
    const { year, month, date, day } = dateString;
</script>

<div class="bucketheader">
    <h1>My Bucket List</h1>
    <h2>
        현재 : {year}년 {month}월 {date}일 {week[day]}요일
    </h2>
    <p>할 일 3개 남음</p>
</div>