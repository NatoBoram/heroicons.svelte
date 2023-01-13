<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { HandRaised } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/HandRaised" icon="heroicons:hand-raised">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="HandRaised" icon="heroicons:hand-raised">
		<HandRaised class={className} />
	</Hst.Variant>
</Hst.Story>
