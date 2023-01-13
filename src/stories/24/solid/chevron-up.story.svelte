<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronUp } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChevronUp" icon="heroicons:chevron-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronUp" icon="heroicons:chevron-up">
		<ChevronUp class={className} />
	</Hst.Variant>
</Hst.Story>
