<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FolderMinus } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/FolderMinus" icon="heroicons:folder-minus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FolderMinus" icon="heroicons:folder-minus">
		<FolderMinus class={className} />
	</Hst.Variant>
</Hst.Story>
