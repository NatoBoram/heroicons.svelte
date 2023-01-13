<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Forward } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Forward" icon="heroicons:forward">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Forward" icon="heroicons:forward">
		<Forward class={className} />
	</Hst.Variant>
</Hst.Story>
