<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Key } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Key" icon="heroicons:key">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Key" icon="heroicons:key">
		<Key class={className} />
	</Hst.Variant>
</Hst.Story>
