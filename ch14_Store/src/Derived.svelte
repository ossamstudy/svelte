<script>
	import { time, elapsed } from './store03';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>현재 시각 : {formatter.format($time)}</h1>
<p>현재 페이지가 열린지 {$elapsed}초가 지났습니다.</p>
