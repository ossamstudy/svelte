<script>
	import { Router, Route } from "svelte-routing";
	import Header from './common/Header.svelte';
	import Main from './pages/Main.svelte';
	import Map from './pages/Map.svelte';
	import Company from './pages/Company.svelte';
	import NotFound from './pages/NotFound.svelte';
	import Footer from './common/Footer.svelte';

	export let url = '';
</script>

<Header />
<Router {url}>
	<Route path="/" component={Main} />
	<Route path="/map/:id" component={Map} />
	<Route path="/company" component={Company} />
	<Route path="*" component={NotFound} />
</Router>
<Footer />