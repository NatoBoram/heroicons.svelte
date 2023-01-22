<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Photo } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Photo" icon="heroicons:photo">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Photo" icon="heroicons:photo">
		<Photo class={className} />
	</Hst.Variant>
</Hst.Story>
