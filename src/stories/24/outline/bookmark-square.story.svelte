<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BookmarkSquare } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/BookmarkSquare" icon="heroicons:bookmark-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BookmarkSquare" icon="heroicons:bookmark-square">
		<BookmarkSquare class={className} />
	</Hst.Variant>
</Hst.Story>
