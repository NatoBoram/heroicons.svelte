<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewColumnsSvelte from '../../../lib/24/solid/view-columns.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ViewColumnsSvelte,
		args: { class: '' },
	})
</script>

<Story name="ViewColumns" />
