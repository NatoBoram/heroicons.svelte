<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Play } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Play" icon="heroicons:play">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Play" icon="heroicons:play">
		<Play class={className} />
	</Hst.Variant>
</Hst.Story>
