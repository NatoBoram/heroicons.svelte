<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PlayPause } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/PlayPause" icon="heroicons:play-pause">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PlayPause" icon="heroicons:play-pause">
		<PlayPause class={className} />
	</Hst.Variant>
</Hst.Story>
