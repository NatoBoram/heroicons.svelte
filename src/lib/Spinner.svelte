<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	type Props = SVGAttributes<SVGSVGElement>
	const { class: className = 'h-5 w-5', ...rest }: Props = $props()
</script>

<!--
@component

This spinner was copied from the official Tailwind documentation.

* **Documentation**: https://tailwindcss.com/docs/animation#adding-a-spin-animation
* **Source code**: https://github.com/tailwindlabs/tailwindcss.com/blob/79d65d7560376eeb4f87c408bbd021cddc125dc1/src/docs/hover-focus-and-other-states.mdx?plain=1#L1668-L1679

## Examples

```svelte
<script lang="ts">
	import { Spinner } from '@natoboram/heroicons.svelte'
</script>

<Spinner />
```
-->

<svg
	{...rest}
	class="animate-spin motion-reduce:hidden {className}"
	fill="none"
	viewBox="0 0 24 24"
>
	<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
	<path
		class="opacity-75"
		fill="currentColor"
		d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
	/>
</svg>
