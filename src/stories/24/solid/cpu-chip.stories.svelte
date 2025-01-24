<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/24/solid/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CpuChipSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CpuChip" />
