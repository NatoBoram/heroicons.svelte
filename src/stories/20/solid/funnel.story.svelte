<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Funnel } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Funnel" icon="heroicons:funnel">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Funnel" icon="heroicons:funnel">
		<Funnel class={className} />
	</Hst.Variant>
</Hst.Story>
