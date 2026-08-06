<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PrinterSvelte from '../../../lib/24/solid/printer.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PrinterSvelte,
		args: { class: '' },
	})
</script>

<Story name="Printer" />
