<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Battery0 } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Battery0" icon="heroicons:battery-0">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Battery0" icon="heroicons:battery-0">
		<Battery0 class={className} />
	</Hst.Variant>
</Hst.Story>
