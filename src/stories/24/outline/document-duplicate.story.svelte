<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentDuplicate } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/DocumentDuplicate" icon="heroicons:document-duplicate">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentDuplicate" icon="heroicons:document-duplicate">
		<DocumentDuplicate class={className} />
	</Hst.Variant>
</Hst.Story>
