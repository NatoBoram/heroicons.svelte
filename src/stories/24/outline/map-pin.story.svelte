<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MapPin } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/MapPin" icon="heroicons:map-pin">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MapPin" icon="heroicons:map-pin">
		<MapPin class={className} />
	</Hst.Variant>
</Hst.Story>
