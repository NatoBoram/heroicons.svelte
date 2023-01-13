<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Film } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Film" icon="heroicons:film">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Film" icon="heroicons:film">
		<Film class={className} />
	</Hst.Variant>
</Hst.Story>
