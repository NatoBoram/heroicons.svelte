<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentArrowDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/DocumentArrowDown" icon="heroicons:document-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentArrowDown" icon="heroicons:document-arrow-down">
		<DocumentArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
