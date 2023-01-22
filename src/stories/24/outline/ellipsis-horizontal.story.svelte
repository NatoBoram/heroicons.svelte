<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EllipsisHorizontal } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/EllipsisHorizontal" icon="heroicons:ellipsis-horizontal">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EllipsisHorizontal" icon="heroicons:ellipsis-horizontal">
		<EllipsisHorizontal class={className} />
	</Hst.Variant>
</Hst.Story>
