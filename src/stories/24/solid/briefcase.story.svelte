<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Briefcase } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Briefcase" icon="heroicons:briefcase">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Briefcase" icon="heroicons:briefcase">
		<Briefcase class={className} />
	</Hst.Variant>
</Hst.Story>
