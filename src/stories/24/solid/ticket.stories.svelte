<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TicketSvelte from '../../../lib/24/solid/ticket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TicketSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Ticket" />
