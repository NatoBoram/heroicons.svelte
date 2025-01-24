<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HeartSvelte from '../../../lib/24/outline/heart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HeartSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Heart" />
