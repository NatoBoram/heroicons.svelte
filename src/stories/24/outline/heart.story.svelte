<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Heart } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Heart" icon="heroicons:heart">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Heart" icon="heroicons:heart">
		<Heart class={className} />
	</Hst.Variant>
</Hst.Story>
