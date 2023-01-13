<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowPath } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowPath" icon="heroicons:arrow-path">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowPath" icon="heroicons:arrow-path">
		<ArrowPath class={className} />
	</Hst.Variant>
</Hst.Story>
