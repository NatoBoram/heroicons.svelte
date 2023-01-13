<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Beaker } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Beaker" icon="heroicons:beaker">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Beaker" icon="heroicons:beaker">
		<Beaker class={className} />
	</Hst.Variant>
</Hst.Story>
