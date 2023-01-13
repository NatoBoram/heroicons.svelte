<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ShieldCheck } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ShieldCheck" icon="heroicons:shield-check">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ShieldCheck" icon="heroicons:shield-check">
		<ShieldCheck class={className} />
	</Hst.Variant>
</Hst.Story>
