<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUp } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowUp" icon="heroicons:arrow-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUp" icon="heroicons:arrow-up">
		<ArrowUp class={className} />
	</Hst.Variant>
</Hst.Story>
