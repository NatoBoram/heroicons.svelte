<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Swatch } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Swatch" icon="heroicons:swatch">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Swatch" icon="heroicons:swatch">
		<Swatch class={className} />
	</Hst.Variant>
</Hst.Story>
