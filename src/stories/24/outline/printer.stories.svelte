<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PrinterSvelte from '../../../lib/24/outline/printer.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PrinterSvelte,
		args: { class: '' },
	})
</script>

<Story name="Printer" />
