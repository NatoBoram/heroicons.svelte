<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSnoozeSvelte from '../../../lib/24/outline/bell-snooze.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BellSnoozeSvelte,
		args: { class: '' },
	})
</script>

<Story name="BellSnooze" />
