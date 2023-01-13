<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Fire } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Fire" icon="heroicons:fire">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Fire" icon="heroicons:fire">
		<Fire class={className} />
	</Hst.Variant>
</Hst.Story>
