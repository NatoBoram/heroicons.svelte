<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ViewColumns } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ViewColumns" icon="heroicons:view-columns">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ViewColumns" icon="heroicons:view-columns">
		<ViewColumns class={className} />
	</Hst.Variant>
</Hst.Story>
