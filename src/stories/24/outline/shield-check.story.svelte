<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ShieldCheck } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ShieldCheck" icon="heroicons:shield-check">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ShieldCheck" icon="heroicons:shield-check">
		<ShieldCheck class={className} />
	</Hst.Variant>
</Hst.Story>
