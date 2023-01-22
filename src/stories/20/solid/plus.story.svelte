<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Plus } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Plus" icon="heroicons:plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Plus" icon="heroicons:plus">
		<Plus class={className} />
	</Hst.Variant>
</Hst.Story>
