<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { UserGroup } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/UserGroup" icon="heroicons:user-group">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="UserGroup" icon="heroicons:user-group">
		<UserGroup class={className} />
	</Hst.Variant>
</Hst.Story>
