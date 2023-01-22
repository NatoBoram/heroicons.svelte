<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FaceSmile } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/FaceSmile" icon="heroicons:face-smile">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FaceSmile" icon="heroicons:face-smile">
		<FaceSmile class={className} />
	</Hst.Variant>
</Hst.Story>
