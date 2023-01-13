<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Gif } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Gif" icon="heroicons:gif">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Gif" icon="heroicons:gif">
		<Gif class={className} />
	</Hst.Variant>
</Hst.Story>
