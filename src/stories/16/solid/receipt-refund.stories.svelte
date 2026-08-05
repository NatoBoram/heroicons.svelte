<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptRefundSvelte from '../../../lib/16/solid/receipt-refund.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ReceiptRefundSvelte,
		args: { class: '' },
	})
</script>

<Story name="ReceiptRefund" />
