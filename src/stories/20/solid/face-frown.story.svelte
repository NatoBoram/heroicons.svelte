<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FaceFrown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/FaceFrown" icon="heroicons:face-frown">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FaceFrown" icon="heroicons:face-frown">
		<FaceFrown class={className} />
	</Hst.Variant>
</Hst.Story>
