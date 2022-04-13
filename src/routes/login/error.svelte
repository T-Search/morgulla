<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Fehlgeschlagene Anmeldung</title>
</svelte:head>

<div class="flex flex-col items-center">
    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <span class="font-medium">Anmeldung fehlgeschlagen!</span><br />
      Die Anmeldung war nicht erfolgreich. Solltest du die Authorisierung abgelehnt haben, kannst du diese Nachricht ignorieren.
      Dein Account Zustand bleibt unverändert.<br />
      <br />
      Fehler: {$page.url.searchParams.get('error')}<br />
      Beschreibung: {$page.url.searchParams.get('description')}
    </div>
</div>