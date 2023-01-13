<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CheckBadge } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CheckBadge" icon="heroicons:check-badge">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CheckBadge" icon="heroicons:check-badge">
		<CheckBadge class={className} />
	</Hst.Variant>
</Hst.Story>
