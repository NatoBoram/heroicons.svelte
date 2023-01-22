<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PaperAirplane } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PaperAirplane" icon="heroicons:paper-airplane">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PaperAirplane" icon="heroicons:paper-airplane">
		<PaperAirplane class={className} />
	</Hst.Variant>
</Hst.Story>
