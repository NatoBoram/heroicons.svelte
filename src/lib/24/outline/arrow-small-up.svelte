<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	type Props = SVGAttributes<SVGSVGElement>
	const { class: className = 'w-6 h-6', ...rest }: Props = $props()
</script>

<svg
	{...rest}
	class="arrow-small-up {className}"
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	aria-hidden="true"
	data-slot="icon"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"
	/>
</svg>
