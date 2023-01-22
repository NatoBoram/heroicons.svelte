<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { RocketLaunch } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/RocketLaunch" icon="heroicons:rocket-launch">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="RocketLaunch" icon="heroicons:rocket-launch">
		<RocketLaunch class={className} />
	</Hst.Variant>
</Hst.Story>
