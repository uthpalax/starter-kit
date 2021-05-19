import preprocess from "svelte-preprocess";
import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    target: '#svelte',
    adapter: vercel()
  }
};