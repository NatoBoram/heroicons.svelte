<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSnoozeSvelte from '../../../lib/24/solid/bell-snooze.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BellSnoozeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BellSnooze" />
