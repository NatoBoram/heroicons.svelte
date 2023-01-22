<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FolderMinus } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/FolderMinus" icon="heroicons:folder-minus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FolderMinus" icon="heroicons:folder-minus">
		<FolderMinus class={className} />
	</Hst.Variant>
</Hst.Story>
