<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { HandThumbDown } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/HandThumbDown" icon="heroicons:hand-thumb-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="HandThumbDown" icon="heroicons:hand-thumb-down">
		<HandThumbDown class={className} />
	</Hst.Variant>
</Hst.Story>
