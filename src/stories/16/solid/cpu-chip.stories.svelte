<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/16/solid/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CpuChipSvelte,
		args: { class: '' },
	})
</script>

<Story name="CpuChip" />
