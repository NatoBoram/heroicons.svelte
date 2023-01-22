<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { VideoCameraSlash } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/VideoCameraSlash" icon="heroicons:video-camera-slash">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="VideoCameraSlash" icon="heroicons:video-camera-slash">
		<VideoCameraSlash class={className} />
	</Hst.Variant>
</Hst.Story>
