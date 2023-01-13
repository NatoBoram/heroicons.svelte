<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BarsArrowUp } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BarsArrowUp" icon="heroicons:bars-arrow-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BarsArrowUp" icon="heroicons:bars-arrow-up">
		<BarsArrowUp class={className} />
	</Hst.Variant>
</Hst.Story>
