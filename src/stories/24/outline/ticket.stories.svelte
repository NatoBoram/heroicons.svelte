<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TicketSvelte from '../../../lib/24/outline/ticket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: TicketSvelte,
		args: { class: '' },
	})
</script>

<Story name="Ticket" />
