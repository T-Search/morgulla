import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/env';

export const broadcasterStore: Writable<string> = writable();
export const allBroadcasterStore: Writable<string[]> = writable([]);

if (browser) {
    if (typeof window !== 'undefined' && localStorage.getItem('broadcaster')) {
        broadcasterStore.set(localStorage.getItem('broadcaster'));
    }

    broadcasterStore.subscribe((name) => localStorage.setItem("broadcaster", name))
    allBroadcasterStore.subscribe((d) => console.log(d));
}

fetch(import.meta.env.VITE_API_BASE_URL + '/broadcaster/autocomplete').then((res) => res.json().then((data) => allBroadcasterStore.set(data.map((name) => name.toLowerCase()))))
