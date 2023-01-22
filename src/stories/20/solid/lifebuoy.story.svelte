<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Lifebuoy } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Lifebuoy" icon="heroicons:lifebuoy">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Lifebuoy" icon="heroicons:lifebuoy">
		<Lifebuoy class={className} />
	</Hst.Variant>
</Hst.Story>
