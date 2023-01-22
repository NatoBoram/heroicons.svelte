<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Megaphone } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Megaphone" icon="heroicons:megaphone">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Megaphone" icon="heroicons:megaphone">
		<Megaphone class={className} />
	</Hst.Variant>
</Hst.Story>
