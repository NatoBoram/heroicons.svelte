<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Pencil } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Pencil" icon="heroicons:pencil">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Pencil" icon="heroicons:pencil">
		<Pencil class={className} />
	</Hst.Variant>
</Hst.Story>
