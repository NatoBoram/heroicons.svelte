<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusSvelte from '../../../lib/24/outline/minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MinusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Minus" />
