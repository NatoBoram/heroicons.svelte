<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PrinterSvelte from '../../../lib/20/solid/printer.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PrinterSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Printer" />
