<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	interface Props extends SVGAttributes<SVGSVGElement> {}
	const { class: className = 'w-4 h-4', ...rest }: Props = $props()
</script>

<svg
	{...rest}
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
	fill="currentColor"
	aria-hidden="true"
	data-slot="icon"
>
	<path
		d="M3.75 6a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75ZM3.75 13.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z"
	/>
</svg>
