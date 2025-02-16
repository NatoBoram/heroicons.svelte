<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	type Props = SVGAttributes<SVGSVGElement>
	const { class: className = 'w-5 h-5', ...rest }: Props = $props()
</script>

<svg
	{...rest}
	class="minus {className}"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
	fill="currentColor"
	aria-hidden="true"
	data-slot="icon"
>
	<path
		fill-rule="evenodd"
		d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
		clip-rule="evenodd"
	/>
</svg>
