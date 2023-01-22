<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Sparkles } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Sparkles" icon="heroicons:sparkles">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Sparkles" icon="heroicons:sparkles">
		<Sparkles class={className} />
	</Hst.Variant>
</Hst.Story>
