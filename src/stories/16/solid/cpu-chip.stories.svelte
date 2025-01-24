<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/16/solid/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CpuChipSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CpuChip" />
