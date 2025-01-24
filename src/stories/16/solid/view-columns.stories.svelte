<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewColumnsSvelte from '../../../lib/16/solid/view-columns.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ViewColumnsSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ViewColumns" />
