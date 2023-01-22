<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowSmallUp } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowSmallUp" icon="heroicons:arrow-small-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowSmallUp" icon="heroicons:arrow-small-up">
		<ArrowSmallUp class={className} />
	</Hst.Variant>
</Hst.Story>
