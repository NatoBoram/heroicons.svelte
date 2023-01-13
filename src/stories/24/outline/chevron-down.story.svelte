<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDown } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ChevronDown" icon="heroicons:chevron-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDown" icon="heroicons:chevron-down">
		<ChevronDown class={className} />
	</Hst.Variant>
</Hst.Story>
