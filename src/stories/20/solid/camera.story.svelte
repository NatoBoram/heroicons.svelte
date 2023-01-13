<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Camera } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Camera" icon="heroicons:camera">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Camera" icon="heroicons:camera">
		<Camera class={className} />
	</Hst.Variant>
</Hst.Story>
