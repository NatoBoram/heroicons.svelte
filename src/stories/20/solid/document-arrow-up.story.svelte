<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentArrowUp } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/DocumentArrowUp" icon="heroicons:document-arrow-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentArrowUp" icon="heroicons:document-arrow-up">
		<DocumentArrowUp class={className} />
	</Hst.Variant>
</Hst.Story>
