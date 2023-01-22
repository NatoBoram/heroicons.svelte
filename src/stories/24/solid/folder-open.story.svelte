<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FolderOpen } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/FolderOpen" icon="heroicons:folder-open">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FolderOpen" icon="heroicons:folder-open">
		<FolderOpen class={className} />
	</Hst.Variant>
</Hst.Story>
