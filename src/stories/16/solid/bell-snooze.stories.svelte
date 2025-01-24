<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSnoozeSvelte from '../../../lib/16/solid/bell-snooze.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BellSnoozeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BellSnooze" />
