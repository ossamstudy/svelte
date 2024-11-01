<script>
	import axios from 'axios';

	const options = {
		method: 'GET',
		url: 'https://api.themoviedb.org/3/movie/now_playing',
		params: {language: 'ko', page: '1'},
		headers: {
			accept: 'application/json',
    		Authorization: 'Bearer f3ec7bccc2f2a27ef8801df388ef8f5b'
		}
	};

	let movies = [];

	const getMovies = async () => {
		try {
			const res = await axios.request(options);
			movies = await res.data.results;
			console.log(movies);
			return res;
		}catch(error) {
			throw new Error(error);
		}
	};
	let promise = getMovies();
	
</script>
{#await promise}
	<p>로딩중...</p>
{:then}
	{#each movies as movie}
		<article>
			<h3>영화명 : {movie.title}</h3>
			<p>설명 : {movie.overview}</p>
			<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} /><br />
		</article>
	{/each}
{:catch error}
	<p>에러가 발생되었습니다.</p>
{/await}

<style>
	article{ 
		width: 500px; border: 3px solid black; 
		padding: 20px; margin-bottom: 20px;
	}
</style>

