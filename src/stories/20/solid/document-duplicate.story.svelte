<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentDuplicate } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/DocumentDuplicate" icon="heroicons:document-duplicate">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentDuplicate" icon="heroicons:document-duplicate">
		<DocumentDuplicate class={className} />
	</Hst.Variant>
</Hst.Story>
