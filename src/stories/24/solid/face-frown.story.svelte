<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FaceFrown } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/FaceFrown" icon="heroicons:face-frown">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FaceFrown" icon="heroicons:face-frown">
		<FaceFrown class={className} />
	</Hst.Variant>
</Hst.Story>
