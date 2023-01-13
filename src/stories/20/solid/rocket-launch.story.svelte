<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { RocketLaunch } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/RocketLaunch" icon="heroicons:rocket-launch">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="RocketLaunch" icon="heroicons:rocket-launch">
		<RocketLaunch class={className} />
	</Hst.Variant>
</Hst.Story>
