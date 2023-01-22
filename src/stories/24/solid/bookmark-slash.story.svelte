<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BookmarkSlash } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/BookmarkSlash" icon="heroicons:bookmark-slash">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BookmarkSlash" icon="heroicons:bookmark-slash">
		<BookmarkSlash class={className} />
	</Hst.Variant>
</Hst.Story>
