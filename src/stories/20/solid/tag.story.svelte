<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Tag } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Tag" icon="heroicons:tag">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Tag" icon="heroicons:tag">
		<Tag class={className} />
	</Hst.Variant>
</Hst.Story>
