<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Megaphone } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Megaphone" icon="heroicons:megaphone">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Megaphone" icon="heroicons:megaphone">
		<Megaphone class={className} />
	</Hst.Variant>
</Hst.Story>
