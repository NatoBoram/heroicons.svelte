<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Stop } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Stop" icon="heroicons:stop">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Stop" icon="heroicons:stop">
		<Stop class={className} />
	</Hst.Variant>
</Hst.Story>
