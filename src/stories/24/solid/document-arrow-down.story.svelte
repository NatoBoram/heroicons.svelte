<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentArrowDown } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/DocumentArrowDown" icon="heroicons:document-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentArrowDown" icon="heroicons:document-arrow-down">
		<DocumentArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
