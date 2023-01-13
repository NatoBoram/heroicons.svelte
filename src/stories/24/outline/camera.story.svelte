<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Camera } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Camera" icon="heroicons:camera">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Camera" icon="heroicons:camera">
		<Camera class={className} />
	</Hst.Variant>
</Hst.Story>
