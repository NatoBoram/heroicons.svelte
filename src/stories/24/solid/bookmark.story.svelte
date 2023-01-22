<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bookmark } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Bookmark" icon="heroicons:bookmark">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bookmark" icon="heroicons:bookmark">
		<Bookmark class={className} />
	</Hst.Variant>
</Hst.Story>
