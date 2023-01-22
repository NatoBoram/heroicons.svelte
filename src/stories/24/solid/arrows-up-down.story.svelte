<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowsUpDown } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowsUpDown" icon="heroicons:arrows-up-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowsUpDown" icon="heroicons:arrows-up-down">
		<ArrowsUpDown class={className} />
	</Hst.Variant>
</Hst.Story>
