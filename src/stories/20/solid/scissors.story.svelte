<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Scissors } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Scissors" icon="heroicons:scissors">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Scissors" icon="heroicons:scissors">
		<Scissors class={className} />
	</Hst.Variant>
</Hst.Story>
