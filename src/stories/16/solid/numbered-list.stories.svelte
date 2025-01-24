<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NumberedListSvelte from '../../../lib/16/solid/numbered-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: NumberedListSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="NumberedList" />
