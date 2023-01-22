<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Sparkles } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Sparkles" icon="heroicons:sparkles">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Sparkles" icon="heroicons:sparkles">
		<Sparkles class={className} />
	</Hst.Variant>
</Hst.Story>
