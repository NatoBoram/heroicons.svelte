<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Document } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Document" icon="heroicons:document">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Document" icon="heroicons:document">
		<Document class={className} />
	</Hst.Variant>
</Hst.Story>
