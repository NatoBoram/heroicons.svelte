<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ClipboardDocument } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ClipboardDocument" icon="heroicons:clipboard-document">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ClipboardDocument" icon="heroicons:clipboard-document">
		<ClipboardDocument class={className} />
	</Hst.Variant>
</Hst.Story>
