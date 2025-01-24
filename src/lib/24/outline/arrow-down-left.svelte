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
		d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
	/>
</svg>
