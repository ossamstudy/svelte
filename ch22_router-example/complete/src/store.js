import { writable } from "svelte/store";
import { initialBests } from './bestData';

export const bests = writable(initialBests);
