<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUturnRight } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowUturnRight" icon="heroicons:arrow-uturn-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUturnRight" icon="heroicons:arrow-uturn-right">
		<ArrowUturnRight class={className} />
	</Hst.Variant>
</Hst.Story>
