<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Heart } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Heart" icon="heroicons:heart">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Heart" icon="heroicons:heart">
		<Heart class={className} />
	</Hst.Variant>
</Hst.Story>
