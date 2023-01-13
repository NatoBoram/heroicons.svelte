<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Tag } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Tag" icon="heroicons:tag">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Tag" icon="heroicons:tag">
		<Tag class={className} />
	</Hst.Variant>
</Hst.Story>
