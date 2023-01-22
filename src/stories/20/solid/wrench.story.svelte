<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Wrench } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Wrench" icon="heroicons:wrench">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Wrench" icon="heroicons:wrench">
		<Wrench class={className} />
	</Hst.Variant>
</Hst.Story>
