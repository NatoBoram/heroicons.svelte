<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PaperAirplane } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PaperAirplane" icon="heroicons:paper-airplane">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PaperAirplane" icon="heroicons:paper-airplane">
		<PaperAirplane class={className} />
	</Hst.Variant>
</Hst.Story>
