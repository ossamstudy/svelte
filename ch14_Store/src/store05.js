import { writable, derived } from 'svelte/store';

export const name = writable('홍길동');

export const greeting = derived(
  name,
  $name => `안녕~ ${$name}!`
);