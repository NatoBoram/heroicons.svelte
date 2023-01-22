<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Swatch } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Swatch" icon="heroicons:swatch">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Swatch" icon="heroicons:swatch">
		<Swatch class={className} />
	</Hst.Variant>
</Hst.Story>
