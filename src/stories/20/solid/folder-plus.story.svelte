<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FolderPlus } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/FolderPlus" icon="heroicons:folder-plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FolderPlus" icon="heroicons:folder-plus">
		<FolderPlus class={className} />
	</Hst.Variant>
</Hst.Story>
