<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	interface Props extends SVGAttributes<SVGSVGElement> {}
	const { class: className = 'w-6 h-6', ...rest }: Props = $props()
</script>

<svg
	{...rest}
	class={className}
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
		d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
	/>
</svg>
