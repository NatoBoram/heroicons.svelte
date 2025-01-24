<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewColumnsSvelte from '../../../lib/20/solid/view-columns.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ViewColumnsSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ViewColumns" />
