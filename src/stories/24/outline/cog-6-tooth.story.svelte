<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Cog6Tooth } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Cog6Tooth" icon="heroicons:cog-6-tooth">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Cog6Tooth" icon="heroicons:cog-6-tooth">
		<Cog6Tooth class={className} />
	</Hst.Variant>
</Hst.Story>
