<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ReceiptRefundSvelte from '../../../lib/24/outline/receipt-refund.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ReceiptRefundSvelte,
		args: { class: '' },
	})
</script>

<Story name="ReceiptRefund" />
