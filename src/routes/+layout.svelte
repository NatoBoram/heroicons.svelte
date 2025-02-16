<script lang="ts">
	import type { Snippet } from 'svelte'
	import '../app.css'

	interface Props {
		readonly children?: Snippet
	}

	const { children }: Props = $props()
</script>

{@render children?.()}
