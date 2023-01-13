<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { VideoCameraSlash } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/VideoCameraSlash" icon="heroicons:video-camera-slash">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="VideoCameraSlash" icon="heroicons:video-camera-slash">
		<VideoCameraSlash class={className} />
	</Hst.Variant>
</Hst.Story>
