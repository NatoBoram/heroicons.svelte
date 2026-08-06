<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FingerPrintSvelte from '../../../lib/16/solid/finger-print.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FingerPrintSvelte,
		args: { class: '' },
	})
</script>

<Story name="FingerPrint" />
