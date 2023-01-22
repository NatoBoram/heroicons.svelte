<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ClipboardDocumentCheck } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ClipboardDocumentCheck" icon="heroicons:clipboard-document-check">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ClipboardDocumentCheck" icon="heroicons:clipboard-document-check">
		<ClipboardDocumentCheck class={className} />
	</Hst.Variant>
</Hst.Story>
