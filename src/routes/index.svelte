<script>
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	if (browser) {
		goto('/search');
	}
</script>
