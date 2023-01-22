<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CircleStack } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CircleStack" icon="heroicons:circle-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CircleStack" icon="heroicons:circle-stack">
		<CircleStack class={className} />
	</Hst.Variant>
</Hst.Story>
