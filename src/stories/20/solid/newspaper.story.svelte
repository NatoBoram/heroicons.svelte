<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Newspaper } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Newspaper" icon="heroicons:newspaper">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Newspaper" icon="heroicons:newspaper">
		<Newspaper class={className} />
	</Hst.Variant>
</Hst.Story>
