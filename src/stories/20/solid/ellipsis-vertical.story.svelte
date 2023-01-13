<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EllipsisVertical } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/EllipsisVertical" icon="heroicons:ellipsis-vertical">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EllipsisVertical" icon="heroicons:ellipsis-vertical">
		<EllipsisVertical class={className} />
	</Hst.Variant>
</Hst.Story>
