<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/20/solid/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CpuChipSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CpuChip" />
