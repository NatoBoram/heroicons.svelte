<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentMinus } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/DocumentMinus" icon="heroicons:document-minus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentMinus" icon="heroicons:document-minus">
		<DocumentMinus class={className} />
	</Hst.Variant>
</Hst.Story>
