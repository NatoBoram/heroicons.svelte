<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BookmarkSquare } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BookmarkSquare" icon="heroicons:bookmark-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BookmarkSquare" icon="heroicons:bookmark-square">
		<BookmarkSquare class={className} />
	</Hst.Variant>
</Hst.Story>
