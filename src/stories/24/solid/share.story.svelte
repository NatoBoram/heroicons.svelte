<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Share } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Share" icon="heroicons:share">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Share" icon="heroicons:share">
		<Share class={className} />
	</Hst.Variant>
</Hst.Story>
