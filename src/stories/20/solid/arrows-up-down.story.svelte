<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowsUpDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowsUpDown" icon="heroicons:arrows-up-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowsUpDown" icon="heroicons:arrows-up-down">
		<ArrowsUpDown class={className} />
	</Hst.Variant>
</Hst.Story>
