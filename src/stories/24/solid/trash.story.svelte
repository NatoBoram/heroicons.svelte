<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Trash } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Trash" icon="heroicons:trash">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Trash" icon="heroicons:trash">
		<Trash class={className} />
	</Hst.Variant>
</Hst.Story>
