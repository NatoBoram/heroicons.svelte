<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Funnel } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Funnel" icon="heroicons:funnel">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Funnel" icon="heroicons:funnel">
		<Funnel class={className} />
	</Hst.Variant>
</Hst.Story>
