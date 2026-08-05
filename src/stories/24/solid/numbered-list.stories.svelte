<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NumberedListSvelte from '../../../lib/24/solid/numbered-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: NumberedListSvelte,
		args: { class: '' },
	})
</script>

<Story name="NumberedList" />
