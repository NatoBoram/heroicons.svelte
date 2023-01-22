<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Rss } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Rss" icon="heroicons:rss">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Rss" icon="heroicons:rss">
		<Rss class={className} />
	</Hst.Variant>
</Hst.Story>
