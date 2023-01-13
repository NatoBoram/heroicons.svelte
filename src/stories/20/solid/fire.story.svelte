<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Fire } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Fire" icon="heroicons:fire">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Fire" icon="heroicons:fire">
		<Fire class={className} />
	</Hst.Variant>
</Hst.Story>
