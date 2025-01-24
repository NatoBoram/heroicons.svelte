<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusSvelte from '../../../lib/24/outline/plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PlusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Plus" />
