<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptPercentSvelte from '../../../lib/16/solid/receipt-percent.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ReceiptPercentSvelte,
		args: { class: '' },
	})
</script>

<Story name="ReceiptPercent" />
