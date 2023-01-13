<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Moon } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Moon" icon="heroicons:moon">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Moon" icon="heroicons:moon">
		<Moon class={className} />
	</Hst.Variant>
</Hst.Story>
