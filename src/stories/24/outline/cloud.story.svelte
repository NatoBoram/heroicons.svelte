<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Cloud } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Cloud" icon="heroicons:cloud">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Cloud" icon="heroicons:cloud">
		<Cloud class={className} />
	</Hst.Variant>
</Hst.Story>
