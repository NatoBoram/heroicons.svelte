<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Flag } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Flag" icon="heroicons:flag">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Flag" icon="heroicons:flag">
		<Flag class={className} />
	</Hst.Variant>
</Hst.Story>
