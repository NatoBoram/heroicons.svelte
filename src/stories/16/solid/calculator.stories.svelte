<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalculatorSvelte from '../../../lib/16/solid/calculator.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CalculatorSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Calculator" />
