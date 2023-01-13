<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PauseCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/PauseCircle" icon="heroicons:pause-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PauseCircle" icon="heroicons:pause-circle">
		<PauseCircle class={className} />
	</Hst.Variant>
</Hst.Story>
