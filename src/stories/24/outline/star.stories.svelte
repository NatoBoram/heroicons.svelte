<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StarSvelte from '../../../lib/24/outline/star.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: StarSvelte,
		args: { class: '' },
	})
</script>

<Story name="Star" />
