<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentText } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/DocumentText" icon="heroicons:document-text">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentText" icon="heroicons:document-text">
		<DocumentText class={className} />
	</Hst.Variant>
</Hst.Story>
