<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/24/outline/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CpuChipSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CpuChip" />
