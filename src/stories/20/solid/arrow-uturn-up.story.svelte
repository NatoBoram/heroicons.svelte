<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUturnUp } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowUturnUp" icon="heroicons:arrow-uturn-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUturnUp" icon="heroicons:arrow-uturn-up">
		<ArrowUturnUp class={className} />
	</Hst.Variant>
</Hst.Story>
