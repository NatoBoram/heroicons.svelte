<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Battery100 } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Battery100" icon="heroicons:battery-100">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Battery100" icon="heroicons:battery-100">
		<Battery100 class={className} />
	</Hst.Variant>
</Hst.Story>
