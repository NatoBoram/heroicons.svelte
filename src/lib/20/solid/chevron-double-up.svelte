<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	type Props = SVGAttributes<SVGSVGElement>
	const { class: className = 'w-5 h-5', ...rest }: Props = $props()
</script>

<svg
	{...rest}
	class="chevron-double-up {className}"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
	fill="currentColor"
	aria-hidden="true"
	data-slot="icon"
>
	<path
		fill-rule="evenodd"
		d="M9.47 4.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 6.31l-3.72 3.72a.75.75 0 1 1-1.06-1.06l4.25-4.25Zm-4.25 9.25 4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 11.31l-3.72 3.72a.75.75 0 0 1-1.06-1.06Z"
		clip-rule="evenodd"
	/>
</svg>
