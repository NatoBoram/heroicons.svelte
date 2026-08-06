<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/24/outline/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CpuChipSvelte,
		args: { class: '' },
	})
</script>

<Story name="CpuChip" />
