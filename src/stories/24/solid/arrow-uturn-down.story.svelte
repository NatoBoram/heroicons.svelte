<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUturnDown } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowUturnDown" icon="heroicons:arrow-uturn-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUturnDown" icon="heroicons:arrow-uturn-down">
		<ArrowUturnDown class={className} />
	</Hst.Variant>
</Hst.Story>
