<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Pause } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Pause" icon="heroicons:pause">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Pause" icon="heroicons:pause">
		<Pause class={className} />
	</Hst.Variant>
</Hst.Story>
