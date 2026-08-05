<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CpuChipSvelte from '../../../lib/20/solid/cpu-chip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CpuChipSvelte,
		args: { class: '' },
	})
</script>

<Story name="CpuChip" />
