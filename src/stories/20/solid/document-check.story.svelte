<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentCheck } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/DocumentCheck" icon="heroicons:document-check">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentCheck" icon="heroicons:document-check">
		<DocumentCheck class={className} />
	</Hst.Variant>
</Hst.Story>
