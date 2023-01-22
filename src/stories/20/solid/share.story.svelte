<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Share } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Share" icon="heroicons:share">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Share" icon="heroicons:share">
		<Share class={className} />
	</Hst.Variant>
</Hst.Story>
