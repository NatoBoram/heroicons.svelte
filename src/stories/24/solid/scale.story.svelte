<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Scale } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Scale" icon="heroicons:scale">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Scale" icon="heroicons:scale">
		<Scale class={className} />
	</Hst.Variant>
</Hst.Story>
