<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUturnUp } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowUturnUp" icon="heroicons:arrow-uturn-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUturnUp" icon="heroicons:arrow-uturn-up">
		<ArrowUturnUp class={className} />
	</Hst.Variant>
</Hst.Story>
