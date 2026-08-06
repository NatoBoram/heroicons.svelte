<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NumberedListSvelte from '../../../lib/24/outline/numbered-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: NumberedListSvelte,
		args: { class: '' },
	})
</script>

<Story name="NumberedList" />
