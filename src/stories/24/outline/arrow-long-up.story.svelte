<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLongUp } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowLongUp" icon="heroicons:arrow-long-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLongUp" icon="heroicons:arrow-long-up">
		<ArrowLongUp class={className} />
	</Hst.Variant>
</Hst.Story>
