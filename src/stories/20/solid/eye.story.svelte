<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Eye } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Eye" icon="heroicons:eye">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Eye" icon="heroicons:eye">
		<Eye class={className} />
	</Hst.Variant>
</Hst.Story>
