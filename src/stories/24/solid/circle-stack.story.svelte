<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CircleStack } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CircleStack" icon="heroicons:circle-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CircleStack" icon="heroicons:circle-stack">
		<CircleStack class={className} />
	</Hst.Variant>
</Hst.Story>
