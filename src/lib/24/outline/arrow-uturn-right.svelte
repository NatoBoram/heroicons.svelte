<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	type Props = SVGAttributes<SVGSVGElement>
	const { class: className = 'w-6 h-6', ...rest }: Props = $props()
</script>

<svg
	{...rest}
	class="arrow-uturn-right {className}"
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
		d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
	/>
</svg>
