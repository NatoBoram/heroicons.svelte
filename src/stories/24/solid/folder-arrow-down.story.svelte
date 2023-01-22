<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FolderArrowDown } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/FolderArrowDown" icon="heroicons:folder-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FolderArrowDown" icon="heroicons:folder-arrow-down">
		<FolderArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
