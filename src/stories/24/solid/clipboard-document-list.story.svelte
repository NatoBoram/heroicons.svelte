<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ClipboardDocumentList } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ClipboardDocumentList" icon="heroicons:clipboard-document-list">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ClipboardDocumentList" icon="heroicons:clipboard-document-list">
		<ClipboardDocumentList class={className} />
	</Hst.Variant>
</Hst.Story>
