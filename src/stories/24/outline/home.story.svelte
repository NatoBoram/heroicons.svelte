<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Home } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Home" icon="heroicons:home">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Home" icon="heroicons:home">
		<Home class={className} />
	</Hst.Variant>
</Hst.Story>
