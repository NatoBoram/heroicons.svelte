<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/24/solid/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CpuChipSvelte,
		args: { class: '' },
	})
</script>

<Story name="CpuChip" />
