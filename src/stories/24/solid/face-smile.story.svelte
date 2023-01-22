<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FaceSmile } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/FaceSmile" icon="heroicons:face-smile">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FaceSmile" icon="heroicons:face-smile">
		<FaceSmile class={className} />
	</Hst.Variant>
</Hst.Story>
