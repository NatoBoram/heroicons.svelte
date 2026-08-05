<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalculatorSvelte from '../../../lib/16/solid/calculator.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CalculatorSvelte,
		args: { class: '' },
	})
</script>

<Story name="Calculator" />
