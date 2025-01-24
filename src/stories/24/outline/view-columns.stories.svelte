<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewColumnsSvelte from '../../../lib/24/outline/view-columns.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ViewColumnsSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ViewColumns" />
