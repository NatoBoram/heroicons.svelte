<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptRefundSvelte from '../../../lib/24/solid/receipt-refund.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ReceiptRefundSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ReceiptRefund" />
