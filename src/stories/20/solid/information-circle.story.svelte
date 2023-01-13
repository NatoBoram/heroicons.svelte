<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { InformationCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/InformationCircle" icon="heroicons:information-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="InformationCircle" icon="heroicons:information-circle">
		<InformationCircle class={className} />
	</Hst.Variant>
</Hst.Story>
