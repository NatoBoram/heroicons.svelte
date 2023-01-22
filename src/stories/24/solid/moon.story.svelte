<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Moon } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Moon" icon="heroicons:moon">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Moon" icon="heroicons:moon">
		<Moon class={className} />
	</Hst.Variant>
</Hst.Story>
