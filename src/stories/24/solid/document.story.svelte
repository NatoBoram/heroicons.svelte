<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Document } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Document" icon="heroicons:document">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Document" icon="heroicons:document">
		<Document class={className} />
	</Hst.Variant>
</Hst.Story>
