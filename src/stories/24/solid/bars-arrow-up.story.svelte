<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BarsArrowUp } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/BarsArrowUp" icon="heroicons:bars-arrow-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BarsArrowUp" icon="heroicons:bars-arrow-up">
		<BarsArrowUp class={className} />
	</Hst.Variant>
</Hst.Story>
