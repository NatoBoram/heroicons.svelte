<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowDownOnSquareStack } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowDownOnSquareStack" icon="heroicons:arrow-down-on-square-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowDownOnSquareStack" icon="heroicons:arrow-down-on-square-stack">
		<ArrowDownOnSquareStack class={className} />
	</Hst.Variant>
</Hst.Story>
