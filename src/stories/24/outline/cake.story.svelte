<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Cake } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Cake" icon="heroicons:cake">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Cake" icon="heroicons:cake">
		<Cake class={className} />
	</Hst.Variant>
</Hst.Story>
