<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ListBullet } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ListBullet" icon="heroicons:list-bullet">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ListBullet" icon="heroicons:list-bullet">
		<ListBullet class={className} />
	</Hst.Variant>
</Hst.Story>
