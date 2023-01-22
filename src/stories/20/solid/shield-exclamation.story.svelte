<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ShieldExclamation } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ShieldExclamation" icon="heroicons:shield-exclamation">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ShieldExclamation" icon="heroicons:shield-exclamation">
		<ShieldExclamation class={className} />
	</Hst.Variant>
</Hst.Story>
