<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Forward } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Forward" icon="heroicons:forward">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Forward" icon="heroicons:forward">
		<Forward class={className} />
	</Hst.Variant>
</Hst.Story>
