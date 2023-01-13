<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { UserPlus } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/UserPlus" icon="heroicons:user-plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="UserPlus" icon="heroicons:user-plus">
		<UserPlus class={className} />
	</Hst.Variant>
</Hst.Story>
