<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Trash } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Trash" icon="heroicons:trash">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Trash" icon="heroicons:trash">
		<Trash class={className} />
	</Hst.Variant>
</Hst.Story>
