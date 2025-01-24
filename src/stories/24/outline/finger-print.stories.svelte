<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FingerPrintSvelte from '../../../lib/24/outline/finger-print.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FingerPrintSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="FingerPrint" />
