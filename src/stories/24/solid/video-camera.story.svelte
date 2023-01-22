<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { VideoCamera } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/VideoCamera" icon="heroicons:video-camera">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="VideoCamera" icon="heroicons:video-camera">
		<VideoCamera class={className} />
	</Hst.Variant>
</Hst.Story>
