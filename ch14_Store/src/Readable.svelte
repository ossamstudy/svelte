<script>
    import { time } from './store02';

    const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>현재 시각 :  {formatter.format($time)}</h1>