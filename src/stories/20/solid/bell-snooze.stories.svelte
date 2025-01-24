<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSnoozeSvelte from '../../../lib/20/solid/bell-snooze.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BellSnoozeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BellSnooze" />
