import { writable } from "svelte/store";

export const products = writable([
  { id: 1, title: "bisiklet", adet: 10 },
  { id: 2, title: "kalem", adet: 5 },
  { id: 3, title: "defter", adet: 3 },
]);

export const sepet = writable(0);
