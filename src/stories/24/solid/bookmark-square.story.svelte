<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BookmarkSquare } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/BookmarkSquare" icon="heroicons:bookmark-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BookmarkSquare" icon="heroicons:bookmark-square">
		<BookmarkSquare class={className} />
	</Hst.Variant>
</Hst.Story>
