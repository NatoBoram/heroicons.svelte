<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { WrenchScrewdriver } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/WrenchScrewdriver" icon="heroicons:wrench-screwdriver">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="WrenchScrewdriver" icon="heroicons:wrench-screwdriver">
		<WrenchScrewdriver class={className} />
	</Hst.Variant>
</Hst.Story>
