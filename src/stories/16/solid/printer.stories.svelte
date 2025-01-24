<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PrinterSvelte from '../../../lib/16/solid/printer.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PrinterSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Printer" />
