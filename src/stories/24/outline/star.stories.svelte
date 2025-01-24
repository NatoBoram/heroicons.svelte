<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StarSvelte from '../../../lib/24/outline/star.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: StarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Star" />
