<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BellAlert } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BellAlert" icon="heroicons:bell-alert">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BellAlert" icon="heroicons:bell-alert">
		<BellAlert class={className} />
	</Hst.Variant>
</Hst.Story>
