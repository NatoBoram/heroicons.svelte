<script lang="ts">
	import type { Snippet } from 'svelte'
	import '../app.postcss'

	interface Props {
		readonly children?: Snippet
	}

	const { children }: Props = $props()
</script>

{@render children?.()}
