<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewColumnsSvelte from '../../../lib/24/outline/view-columns.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ViewColumnsSvelte,
		args: { class: '' },
	})
</script>

<Story name="ViewColumns" />
