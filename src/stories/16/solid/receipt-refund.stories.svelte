<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptRefundSvelte from '../../../lib/16/solid/receipt-refund.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ReceiptRefundSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ReceiptRefund" />
