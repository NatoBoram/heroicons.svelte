<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PrinterSvelte from '../../../lib/16/solid/printer.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PrinterSvelte,
		args: { class: '' },
	})
</script>

<Story name="Printer" />
