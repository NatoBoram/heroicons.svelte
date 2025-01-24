<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalculatorSvelte from '../../../lib/24/solid/calculator.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CalculatorSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Calculator" />
