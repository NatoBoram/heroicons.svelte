<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ClipboardDocumentList } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ClipboardDocumentList" icon="heroicons:clipboard-document-list">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ClipboardDocumentList" icon="heroicons:clipboard-document-list">
		<ClipboardDocumentList class={className} />
	</Hst.Variant>
</Hst.Story>
