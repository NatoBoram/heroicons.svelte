<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PlayCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PlayCircle" icon="heroicons:play-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PlayCircle" icon="heroicons:play-circle">
		<PlayCircle class={className} />
	</Hst.Variant>
</Hst.Story>
