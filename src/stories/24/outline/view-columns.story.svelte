<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ViewColumns } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ViewColumns" icon="heroicons:view-columns">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ViewColumns" icon="heroicons:view-columns">
		<ViewColumns class={className} />
	</Hst.Variant>
</Hst.Story>
