<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { LightBulb } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/LightBulb" icon="heroicons:light-bulb">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="LightBulb" icon="heroicons:light-bulb">
		<LightBulb class={className} />
	</Hst.Variant>
</Hst.Story>
