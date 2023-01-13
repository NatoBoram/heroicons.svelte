<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Photo } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Photo" icon="heroicons:photo">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Photo" icon="heroicons:photo">
		<Photo class={className} />
	</Hst.Variant>
</Hst.Story>
