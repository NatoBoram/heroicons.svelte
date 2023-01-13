<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowPath } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowPath" icon="heroicons:arrow-path">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowPath" icon="heroicons:arrow-path">
		<ArrowPath class={className} />
	</Hst.Variant>
</Hst.Story>
