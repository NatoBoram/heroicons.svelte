<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentPlus } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/DocumentPlus" icon="heroicons:document-plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentPlus" icon="heroicons:document-plus">
		<DocumentPlus class={className} />
	</Hst.Variant>
</Hst.Story>
