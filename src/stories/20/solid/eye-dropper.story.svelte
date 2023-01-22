<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EyeDropper } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/EyeDropper" icon="heroicons:eye-dropper">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EyeDropper" icon="heroicons:eye-dropper">
		<EyeDropper class={className} />
	</Hst.Variant>
</Hst.Story>
