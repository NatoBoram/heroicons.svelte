<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PauseCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PauseCircle" icon="heroicons:pause-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PauseCircle" icon="heroicons:pause-circle">
		<PauseCircle class={className} />
	</Hst.Variant>
</Hst.Story>
