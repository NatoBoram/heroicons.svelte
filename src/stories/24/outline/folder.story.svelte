<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Folder } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Folder" icon="heroicons:folder">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Folder" icon="heroicons:folder">
		<Folder class={className} />
	</Hst.Variant>
</Hst.Story>
