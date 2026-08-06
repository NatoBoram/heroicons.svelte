<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalculatorSvelte from '../../../lib/20/solid/calculator.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CalculatorSvelte,
		args: { class: '' },
	})
</script>

<Story name="Calculator" />
