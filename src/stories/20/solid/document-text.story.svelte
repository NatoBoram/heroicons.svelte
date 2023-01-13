<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentText } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/DocumentText" icon="heroicons:document-text">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentText" icon="heroicons:document-text">
		<DocumentText class={className} />
	</Hst.Variant>
</Hst.Story>
