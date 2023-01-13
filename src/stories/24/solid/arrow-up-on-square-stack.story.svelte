<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUpOnSquareStack } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowUpOnSquareStack" icon="heroicons:arrow-up-on-square-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUpOnSquareStack" icon="heroicons:arrow-up-on-square-stack">
		<ArrowUpOnSquareStack class={className} />
	</Hst.Variant>
</Hst.Story>
