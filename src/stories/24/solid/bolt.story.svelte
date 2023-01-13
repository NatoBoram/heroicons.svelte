<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bolt } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Bolt" icon="heroicons:bolt">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bolt" icon="heroicons:bolt">
		<Bolt class={className} />
	</Hst.Variant>
</Hst.Story>
