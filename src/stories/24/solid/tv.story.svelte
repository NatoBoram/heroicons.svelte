<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Tv } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Tv" icon="heroicons:tv">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Tv" icon="heroicons:tv">
		<Tv class={className} />
	</Hst.Variant>
</Hst.Story>
