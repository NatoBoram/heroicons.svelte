<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EllipsisVertical } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/EllipsisVertical" icon="heroicons:ellipsis-vertical">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EllipsisVertical" icon="heroicons:ellipsis-vertical">
		<EllipsisVertical class={className} />
	</Hst.Variant>
</Hst.Story>
