<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Battery100 } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Battery100" icon="heroicons:battery-100">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Battery100" icon="heroicons:battery-100">
		<Battery100 class={className} />
	</Hst.Variant>
</Hst.Story>
