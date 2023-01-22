<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Cog8Tooth } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Cog8Tooth" icon="heroicons:cog-8-tooth">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Cog8Tooth" icon="heroicons:cog-8-tooth">
		<Cog8Tooth class={className} />
	</Hst.Variant>
</Hst.Story>
