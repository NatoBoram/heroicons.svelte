<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUturnLeft } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowUturnLeft" icon="heroicons:arrow-uturn-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUturnLeft" icon="heroicons:arrow-uturn-left">
		<ArrowUturnLeft class={className} />
	</Hst.Variant>
</Hst.Story>
