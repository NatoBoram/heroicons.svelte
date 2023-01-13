<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Phone } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Phone" icon="heroicons:phone">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Phone" icon="heroicons:phone">
		<Phone class={className} />
	</Hst.Variant>
</Hst.Story>
