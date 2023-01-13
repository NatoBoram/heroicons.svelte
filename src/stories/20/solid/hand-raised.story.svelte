<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { HandRaised } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/HandRaised" icon="heroicons:hand-raised">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="HandRaised" icon="heroicons:hand-raised">
		<HandRaised class={className} />
	</Hst.Variant>
</Hst.Story>
