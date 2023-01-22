<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Newspaper } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Newspaper" icon="heroicons:newspaper">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Newspaper" icon="heroicons:newspaper">
		<Newspaper class={className} />
	</Hst.Variant>
</Hst.Story>
