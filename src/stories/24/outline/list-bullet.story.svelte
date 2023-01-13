<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ListBullet } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ListBullet" icon="heroicons:list-bullet">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ListBullet" icon="heroicons:list-bullet">
		<ListBullet class={className} />
	</Hst.Variant>
</Hst.Story>
