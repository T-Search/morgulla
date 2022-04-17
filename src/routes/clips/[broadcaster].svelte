<script>
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { getStores, navigating, page, session, updated } from '$app/stores';

	if (browser) {
		localStorage.setItem('broadcaster', $page.params.broadcaster);
		goto('/clips');
	}
</script>
