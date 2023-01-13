<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowDownCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowDownCircle" icon="heroicons:arrow-down-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowDownCircle" icon="heroicons:arrow-down-circle">
		<ArrowDownCircle class={className} />
	</Hst.Variant>
</Hst.Story>
