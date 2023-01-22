<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Truck } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Truck" icon="heroicons:truck">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Truck" icon="heroicons:truck">
		<Truck class={className} />
	</Hst.Variant>
</Hst.Story>
