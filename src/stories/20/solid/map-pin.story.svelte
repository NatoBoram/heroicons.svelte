<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MapPin } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/MapPin" icon="heroicons:map-pin">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MapPin" icon="heroicons:map-pin">
		<MapPin class={className} />
	</Hst.Variant>
</Hst.Story>
